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
    for (const r of results) {
      const type = mapGroup(r.entity_group ?? r.entity);
      if (!type) continue;
      if (typeof r.score === 'number' && r.score < SCORE_THRESHOLD) continue;
      if (typeof r.start !== 'number' || typeof r.end !== 'number') continue;
      out.push({
        type,
        start: part.offset + r.start,
        end: part.offset + r.end,
        text: part.text.slice(r.start, r.end),
        source: 'ner',
        score: r.score,
      });
    }
  }
  return out;
}
