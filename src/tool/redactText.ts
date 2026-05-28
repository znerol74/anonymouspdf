import { type DetectedSpan, TYPE_LABELS } from './types';

/** Replace each detected span in `text` with its localized label. */
export function redactText(text: string, spans: DetectedSpan[], lang: 'en' | 'de'): string {
  const labels = TYPE_LABELS[lang];
  const sorted = [...spans].sort((a, b) => a.start - b.start);
  let out = '';
  let cursor = 0;
  for (const s of sorted) {
    if (s.start < cursor) continue;
    out += text.slice(cursor, s.start) + labels[s.type];
    cursor = s.end;
  }
  out += text.slice(cursor);
  return out;
}
