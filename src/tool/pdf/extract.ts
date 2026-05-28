import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// Minimal structural types so we don't depend on pdfjs-dist's type export paths.
export interface PdfViewport {
  width: number;
  height: number;
}
export interface PdfPage {
  getViewport(p: { scale: number }): PdfViewport;
  getTextContent(): Promise<{ items: unknown[] }>;
  render(p: { canvasContext: CanvasRenderingContext2D; viewport: PdfViewport }): {
    promise: Promise<void>;
  };
}
export interface PdfDoc {
  numPages: number;
  getPage(n: number): Promise<PdfPage>;
}

interface RawTextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
  hasEOL?: boolean;
}

/** Bounding box of one character in PDF user space (origin bottom-left). */
export interface CharBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface PageText {
  pageIndex: number;
  width: number;
  height: number;
  /** Concatenated page text; `boxes[i]` is the box for `text[i]`. */
  text: string;
  boxes: CharBox[];
}

let measureCtx: CanvasRenderingContext2D | null = null;
function getMeasureCtx(): CanvasRenderingContext2D | null {
  if (measureCtx) return measureCtx;
  if (typeof document === 'undefined') return null;
  measureCtx = document.createElement('canvas').getContext('2d');
  return measureCtx;
}

// Split a run's known total width across its characters by their real glyph
// proportions (measured with a sans-serif fallback) rather than a flat average.
// A flat w/n inflates positions after narrow prefixes (caps/@/digits raise the
// mean), shifting boxes right and leaving the first glyph of a span exposed.
// Per UTF-16 code unit so boxes stay aligned 1:1 with the concatenated text.
function charWidths(str: string, totalWidth: number, fontSize: number): number[] {
  const n = str.length;
  if (n === 0) return [];
  const cw = totalWidth / n;
  const ctx = getMeasureCtx();
  if (!ctx || totalWidth <= 0) return new Array(n).fill(cw);
  ctx.font = `${Math.max(1, fontSize)}px sans-serif`;
  const rel: number[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const w = ctx.measureText(str[i]).width;
    rel.push(w);
    sum += w;
  }
  if (sum <= 0) return new Array(n).fill(cw);
  const k = totalWidth / sum;
  return rel.map((r) => r * k);
}

export async function loadPdf(data: ArrayBuffer): Promise<PdfDoc> {
  const pdfjs = await import('pdfjs-dist');
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  // slice(0) so the original ArrayBuffer is never transferred to the worker.
  const doc = await pdfjs.getDocument({ data: data.slice(0) }).promise;
  return doc as unknown as PdfDoc;
}

export async function extractPages(doc: PdfDoc): Promise<PageText[]> {
  const pages: PageText[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();

    let text = '';
    const boxes: CharBox[] = [];

    for (const raw of content.items) {
      if (!raw || typeof raw !== 'object' || !('str' in raw)) continue;
      const it = raw as RawTextItem;
      const str = it.str;
      const tx = it.transform;
      const x = tx[4];
      const y = tx[5];
      const h = it.height || Math.hypot(tx[1], tx[3]) || 10;
      const w = it.width || 0;
      const n = str.length;

      const widths = charWidths(str, w, h);
      let cursor = x;
      for (let i = 0; i < n; i++) {
        boxes.push({ x: cursor, y, w: widths[i], h });
        cursor += widths[i];
      }
      text += str;
      // Separator between runs keeps word boundaries intact for detection.
      text += it.hasEOL ? '\n' : ' ';
      boxes.push({ x: x + w, y, w: 0, h });
    }

    pages.push({ pageIndex: p - 1, width: viewport.width, height: viewport.height, text, boxes });
  }
  return pages;
}
