import { useCallback, useRef, useState } from 'react';
import { runRegexLayer, resolveOverlaps } from '../tool/detect';
import { runNer } from '../tool/detect/ner';
import { loadPdf, extractPages } from '../tool/pdf/extract';
import { redactToPdf } from '../tool/pdf/redact';
import { buildPseudonyms, applyPseudonyms, pseudonymFor } from '../tool/anonymize';
import { toolStrings, type Lang } from '../tool/strings';
import type { DetectedSpan, EntityType } from '../tool/types';

type Phase = 'idle' | 'reading' | 'extracting' | 'model' | 'detecting' | 'rendering' | 'done' | 'error';

const PREVIEW_PAGES = 3;

const TYPE_COLORS: Record<EntityType, { bg: string; fg: string }> = {
  PERSON: { bg: '#dbeafe', fg: '#1e3a8a' },
  ORG: { bg: '#e0e7ff', fg: '#3730a3' },
  ADRESSE: { bg: '#dcfce7', fg: '#166534' },
  EMAIL: { bg: '#ccfbf1', fg: '#115e59' },
  TELEFON: { bg: '#cffafe', fg: '#155e75' },
  IBAN: { bg: '#fef3c7', fg: '#92400e' },
  CREDIT_CARD: { bg: '#ffedd5', fg: '#9a3412' },
  SVNR: { bg: '#ffe4e6', fg: '#9f1239' },
  AKTENZEICHEN: { bg: '#f3e8ff', fg: '#6b21a8' },
  FN: { bg: '#ecfccb', fg: '#3f6212' },
  EZ: { bg: '#d1fae5', fg: '#065f46' },
  KENNZEICHEN: { bg: '#fae8ff', fg: '#86198f' },
  URL: { bg: '#e0f2fe', fg: '#075985' },
  IP: { bg: '#e2e8f0', fg: '#334155' },
  DATE: { bg: '#fef9c3', fg: '#854d0e' },
};

interface Props {
  lang: Lang;
}

interface Segment {
  text: string;
  type?: EntityType;
}

interface Done {
  preview: Segment[][];
  morePages: number;
  redactedText: string;
  pdfBytes: Uint8Array;
  counts: { type: EntityType; n: number }[];
  total: number;
  pageCount: number;
  fileName: string;
}

function toSegments(text: string, spans: DetectedSpan[]): Segment[] {
  const sorted = [...spans].sort((a, b) => a.start - b.start);
  const segs: Segment[] = [];
  let cursor = 0;
  for (const s of sorted) {
    if (s.start < cursor) continue;
    if (s.start > cursor) segs.push({ text: text.slice(cursor, s.start) });
    segs.push({ text: text.slice(s.start, s.end), type: s.type });
    cursor = s.end;
  }
  if (cursor < text.length) segs.push({ text: text.slice(cursor) });
  return segs;
}

/** Send a GA4 event (no PII — only step names and aggregate counts). */
function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', event, params);
  }
}

function Spinner() {
  return (
    <svg className="h-6 w-6 animate-spin text-brand-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

export default function RedactionTool({ lang }: Props) {
  const t = toolStrings[lang] ?? toolStrings.en!;
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState<Done | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const busy = phase === 'reading' || phase === 'extracting' || phase === 'model' || phase === 'detecting' || phase === 'rendering';

  const process = useCallback(
    async (file: File) => {
      setResult(null);
      setErrorMsg('');
      setProgress(0);
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        setErrorMsg(t.notPdf);
        setPhase('error');
        track('process_error', { reason: 'not_pdf' });
        return;
      }
      try {
        track('file_selected', { lang });
        setPhase('reading');
        const buf = await file.arrayBuffer();

        setPhase('extracting');
        const doc = await loadPdf(buf);
        const pages = await extractPages(doc);

        const spansByPage: DetectedSpan[][] = [];
        let modelReady = false;
        for (const page of pages) {
          const regexSpans = runRegexLayer(page.text);
          if (!modelReady) setPhase('model');
          const nerSpans = await runNer(page.text, (info) => {
            if (info.status === 'progress' && typeof info.progress === 'number') {
              setProgress(Math.round(info.progress));
            }
          });
          modelReady = true;
          setPhase('detecting');
          spansByPage.push(resolveOverlaps([...regexSpans, ...nerSpans]));
        }

        const pseudonyms = buildPseudonyms(spansByPage);

        setPhase('rendering');
        const { pdfBytes, redactionCount } = await redactToPdf(doc, pages, spansByPage, (s) =>
          pseudonymFor(s, pseudonyms),
        );
        const redacted = pages.map((p, i) => applyPseudonyms(p.text, spansByPage[i], pseudonyms)).join('\n\n');
        const preview = pages.slice(0, PREVIEW_PAGES).map((p, i) => toSegments(p.text, spansByPage[i]));

        const tally = new Map<EntityType, number>();
        for (const spans of spansByPage) {
          for (const s of spans) tally.set(s.type, (tally.get(s.type) ?? 0) + 1);
        }
        const counts = [...tally.entries()]
          .map(([type, n]) => ({ type, n }))
          .sort((a, b) => b.n - a.n);

        setResult({
          preview,
          morePages: Math.max(0, pages.length - PREVIEW_PAGES),
          redactedText: redacted,
          pdfBytes,
          counts,
          total: redactionCount,
          pageCount: pages.length,
          fileName: file.name.replace(/\.pdf$/i, ''),
        });
        setPhase('done');
        track('process_complete', { redactions: redactionCount, pages: pages.length });
      } catch (err) {
        console.error(err);
        setErrorMsg(t.error);
        setPhase('error');
        track('process_error', { reason: 'exception' });
      }
    },
    [t],
  );

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (file) void process(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void process(file);
  };

  const download = () => {
    if (!result) return;
    track('download_pdf', { redactions: result.total });
    const blob = new Blob([result.pdfBytes as Uint8Array<ArrayBuffer>], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.fileName || 'document'}-anonymized.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadText = () => {
    if (!result) return;
    track('download_text', { redactions: result.total });
    const blob = new Blob([result.redactedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.fileName || 'document'}-anonymized.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copy = async () => {
    if (!result) return;
    track('copy_text', { redactions: result.total });
    await navigator.clipboard.writeText(result.redactedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const reset = () => {
    setPhase('idle');
    setResult(null);
    setErrorMsg('');
    setProgress(0);
  };

  const statusText =
    phase === 'reading'
      ? t.reading
      : phase === 'extracting'
        ? t.extracting
        : phase === 'model'
          ? t.modelLoading
          : phase === 'detecting'
            ? t.detecting
            : phase === 'rendering'
              ? t.rendering
              : '';

  return (
    <div className="mx-auto mt-10 max-w-2xl text-start">
      {phase === 'idle' || phase === 'error' ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-colors ${
            dragging ? 'border-brand-500 bg-brand-50' : 'border-brand-300 bg-white hover:bg-slate-50'
          }`}
        >
          <input ref={inputRef} type="file" accept="application/pdf,.pdf" className="hidden" onChange={onInput} />
          <p className="text-base font-medium text-slate-700">{t.drop}</p>
          <button
            type="button"
            className="mt-4 rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
          >
            {t.choose}
          </button>
          <p className="mt-4 text-sm text-slate-500">{t.privacy}</p>
          {phase === 'error' && <p className="mt-4 text-sm font-medium text-red-600">{errorMsg}</p>}
        </div>
      ) : null}

      {busy ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <div className="flex items-center justify-center gap-3">
            <Spinner />
            <span className="text-base font-medium text-slate-700">{statusText}</span>
          </div>
          {phase === 'model' ? (
            <div className="mx-auto mt-6 max-w-sm">
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full bg-brand-600 transition-all" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-3 text-xs text-slate-500">{t.modelNote}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      {phase === 'done' && result ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-lg font-bold text-slate-900">{t.doneTitle}</h3>
          <p className="mt-1 text-sm text-slate-600">
            <span className="font-semibold text-brand-700">{result.total}</span> {t.found} · {result.pageCount}{' '}
            {t.pages}
          </p>

          {result.total === 0 ? (
            <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">{t.nothing}</p>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {result.counts.map((c) => (
                <span
                  key={c.type}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: TYPE_COLORS[c.type].bg, color: TYPE_COLORS[c.type].fg }}
                >
                  {t.typeNames[c.type]}: {c.n}
                </span>
              ))}
            </div>
          )}

          {result.total > 0 ? (
            <div className="mt-6 max-h-96 overflow-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
              {result.preview.map((segments, i) => (
                <p
                  key={i}
                  className="whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-slate-800"
                >
                  {segments.map((seg, j) =>
                    seg.type ? (
                      <mark
                        key={j}
                        className="rounded px-0.5"
                        style={{ backgroundColor: TYPE_COLORS[seg.type].bg, color: TYPE_COLORS[seg.type].fg }}
                        title={t.typeNames[seg.type]}
                      >
                        {seg.text}
                      </mark>
                    ) : (
                      <span key={j}>{seg.text}</span>
                    ),
                  )}
                </p>
              ))}
              {result.morePages > 0 ? (
                <p className="mt-3 text-xs text-slate-500">
                  +{result.morePages} {t.pages}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={download}
              className="rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
            >
              {t.downloadPdf}
            </button>
            <button
              type="button"
              onClick={downloadText}
              className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              {t.downloadText}
            </button>
            <button
              type="button"
              onClick={copy}
              className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              {copied ? t.copied : t.copyText}
            </button>
            <button type="button" onClick={reset} className="px-3 py-2.5 font-medium text-slate-500 hover:text-slate-800">
              {t.again}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
