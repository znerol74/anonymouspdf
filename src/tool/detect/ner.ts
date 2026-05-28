import type { DetectedSpan, EntityType } from '../types';

export interface NerProgress {
  status: string;
  file?: string;
  progress?: number;
}
export type ProgressCb = (info: NerProgress) => void;

const MODEL_ID = 'Xenova/bert-base-multilingual-cased-ner-hrl';
const SCORE_THRESHOLD = 0.6;
const MAX_CHARS = 1500;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let pipePromise: Promise<any> | null = null;

async function getPipeline(onProgress?: ProgressCb) {
  if (!pipePromise) {
    pipePromise = (async () => {
      const { pipeline, env } = await import('@huggingface/transformers');
      env.allowLocalModels = false;
      return pipeline('token-classification', MODEL_ID, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        progress_callback: onProgress as any,
      });
    })();
  }
  return pipePromise;
}

function mapGroup(group: string | undefined): EntityType | null {
  switch (group) {
    case 'PER':
      return 'PERSON';
    case 'ORG':
      return 'ORG';
    case 'LOC':
      return 'ADRESSE';
    default:
      return null;
  }
}

function chunk(text: string, max: number): { text: string; offset: number }[] {
  const out: { text: string; offset: number }[] = [];
  let i = 0;
  while (i < text.length) {
    let end = Math.min(i + max, text.length);
    if (end < text.length) {
      const ws = text.lastIndexOf(' ', end);
      if (ws > i + max * 0.5) end = ws;
    }
    out.push({ text: text.slice(i, end), offset: i });
    i = end;
  }
  return out;
}

export interface NerToken {
  /** Raw per-token tag, e.g. "B-PER" / "I-PER". Present when un-aggregated. */
  entity?: string;
  /** Merged group label, e.g. "PER". Present when the pipeline aggregates. */
  entity_group?: string;
  word?: string;
  score?: number;
  start?: number;
  end?: number;
}

// transformers.js (3.x) ignores `aggregation_strategy` and returns raw per-token
// BIO tags (`entity: "B-PER"/"I-PER"`) with NO character offsets — only `word`.
// So merge consecutive BIO tokens of one type and recover char offsets by
// locating each token's surface form in the source text with a forward cursor.
// Also handles the aggregated shape (`entity_group` + numeric start/end) in case
// a future version honors the strategy.
export function aggregateNerTokens(tokens: NerToken[], text: string): DetectedSpan[] {
  const spans: DetectedSpan[] = [];
  let cursor = 0;

  let cur: { type: EntityType; scores: number[]; start: number; end: number; placed: boolean } | null = null;

  const flush = () => {
    if (cur && cur.placed) {
      const score = cur.scores.length ? Math.min(...cur.scores) : 1;
      if (score >= SCORE_THRESHOLD) {
        spans.push({
          type: cur.type,
          start: cur.start,
          end: cur.end,
          text: text.slice(cur.start, cur.end),
          source: 'ner',
          score,
        });
      }
    }
    cur = null;
  };

  for (const tok of tokens) {
    const label = tok.entity ?? tok.entity_group;
    if (!label || !tok.word) {
      flush();
      continue;
    }
    const m = /^([BI])-(.+)$/.exec(label);
    const prefix = m ? m[1] : '';
    const base = m ? m[2] : label;
    const type = mapGroup(base);
    if (!type) {
      flush();
      continue;
    }

    // A "B-" tag, an un-prefixed (already-aggregated) tag, or a type switch
    // starts a new entity; an "I-" of the same type extends the current one.
    if (prefix !== 'I' || !cur || cur.type !== type) flush();
    if (!cur) cur = { type, scores: [], start: -1, end: -1, placed: false };

    let s: number;
    let e: number;
    if (typeof tok.start === 'number' && typeof tok.end === 'number') {
      s = tok.start;
      e = tok.end;
    } else {
      const word = tok.word.replace(/^##/, '');
      const idx = text.indexOf(word, cursor);
      if (idx === -1) {
        if (typeof tok.score === 'number') cur.scores.push(tok.score);
        continue;
      }
      s = idx;
      e = idx + word.length;
    }
    cursor = e;
    if (!cur.placed) {
      cur.start = s;
      cur.placed = true;
    }
    cur.end = e;
    if (typeof tok.score === 'number') cur.scores.push(tok.score);
  }
  flush();
  return spans;
}

/** Load (and cache) the NER model. Use to surface download progress up front. */
export async function warmupNer(onProgress?: ProgressCb): Promise<void> {
  await getPipeline(onProgress);
}

export async function runNer(text: string, onProgress?: ProgressCb): Promise<DetectedSpan[]> {
  if (!text.trim()) return [];
  const pipe = await getPipeline(onProgress);
  const out: DetectedSpan[] = [];

  for (const part of chunk(text, MAX_CHARS)) {
    const results = await pipe(part.text, { aggregation_strategy: 'simple' });
    if (!Array.isArray(results)) continue;
    for (const span of aggregateNerTokens(results as NerToken[], part.text)) {
      out.push({ ...span, start: span.start + part.offset, end: span.end + part.offset });
    }
  }
  return out;
}
