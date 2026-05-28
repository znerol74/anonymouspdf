import { useCallback, useRef, useState } from 'react';
import { runRegexLayer, resolveOverlaps } from '../tool/detect';
import { runNer } from '../tool/detect/ner';
import { loadPdf, extractPages } from '../tool/pdf/extract';
import { redactToPdf } from '../tool/pdf/redact';
import { redactText } from '../tool/redactText';
import { toolStrings, type Lang } from '../tool/strings';
import type { DetectedSpan, EntityType } from '../tool/types';

type Phase = 'idle' | 'reading' | 'extracting' | 'model' | 'detecting' | 'rendering' | 'done' | 'error';

interface Props {
  lang: Lang;
}

interface Done {
  previews: string[];
  redactedText: string;
  pdfBytes: Uint8Array;
  counts: { type: EntityType; n: number }[];
  total: number;
  pages: number;
  fileName: string;
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
  const t = toolStrings[lang];
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
        return;
      }
      try {
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

        setPhase('rendering');
        const { pdfBytes, previews, redactionCount } = await redactToPdf(doc, pages, spansByPage);
        const redacted = pages.map((p, i) => redactText(p.text, spansByPage[i], lang)).join('\n\n');

        const tally = new Map<EntityType, number>();
        for (const spans of spansByPage) {
          for (const s of spans) tally.set(s.type, (tally.get(s.type) ?? 0) + 1);
        }
        const counts = [...tally.entries()]
          .map(([type, n]) => ({ type, n }))
          .sort((a, b) => b.n - a.n);

        setResult({
          previews,
          redactedText: redacted,
          pdfBytes,
          counts,
          total: redactionCount,
          pages: pages.length,
          fileName: file.name.replace(/\.pdf$/i, ''),
        });
        setPhase('done');
      } catch (err) {
        console.error(err);
        setErrorMsg(t.error);
        setPhase('error');
      }
    },
    [lang, t],
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
    const blob = new Blob([result.pdfBytes as Uint8Array<ArrayBuffer>], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.fileName || 'document'}-redacted.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copy = async () => {
    if (!result) return;
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
    <div className="mx-auto mt-10 max-w-2xl text-left">
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
            <span className="font-semibold text-brand-700">{result.total}</span> {t.found} · {result.pages}{' '}
            {t.pages}
          </p>

          {result.total === 0 ? (
            <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">{t.nothing}</p>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {result.counts.map((c) => (
                <span
                  key={c.type}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {t.typeNames[c.type]}: {c.n}
                </span>
              ))}
            </div>
          )}

          {result.previews.length > 0 ? (
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
              {result.previews.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Page ${i + 1}`}
                  className="h-56 w-auto flex-none rounded border border-slate-200"
                />
              ))}
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
