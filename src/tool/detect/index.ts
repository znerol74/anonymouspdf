import { type DetectedSpan, PRECEDENCE } from '../types';
import { runRegexLayer } from './regex';

export { runRegexLayer };

/**
 * Greedy overlap resolution: higher-precedence (then longer, then earlier)
 * spans win, so a detected IBAN/email is never clobbered by a softer NER
 * guess that overlaps.
 */
export function resolveOverlaps(spans: DetectedSpan[]): DetectedSpan[] {
  const sorted = [...spans].sort(
    (a, b) =>
      PRECEDENCE[b.type] - PRECEDENCE[a.type] ||
      b.end - b.start - (a.end - a.start) ||
      a.start - b.start,
  );
  const accepted: DetectedSpan[] = [];
  for (const s of sorted) {
    if (s.end <= s.start) continue;
    const clash = accepted.some((a) => s.start < a.end && a.start < s.end);
    if (!clash) accepted.push(s);
  }
  return accepted.sort((a, b) => a.start - b.start);
}
