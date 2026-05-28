import type { DetectedSpan } from '../types';
import type { PageText, PdfDoc } from './extract';

export interface RedactResult {
  pdfBytes: Uint8Array;
  redactionCount: number;
}

interface Rect {
  x0: number;
  x1: number;
  yTop: number;
  yBot: number;
  /** Text baseline (PDF user space, origin bottom-left) for drawing the label. */
  baseline: number;
  /** Glyph height, used as the label font size. */
  fontH: number;
}

function spanRect(page: PageText, span: DetectedSpan): Rect | null {
  const start = Math.max(0, span.start);
  const end = Math.min(page.boxes.length, span.end);
  let x0 = Infinity;
  let x1 = -Infinity;
  let yTop = -Infinity;
  let yBot = Infinity;
  let baseline = 0;
  let fontH = 0;
  let found = false;
  for (let i = start; i < end; i++) {
    const b = page.boxes[i];
    if (!b || b.w === 0) continue;
    if (!found) {
      baseline = b.y;
      fontH = b.h;
    }
    found = true;
    x0 = Math.min(x0, b.x);
    x1 = Math.max(x1, b.x + b.w);
    yTop = Math.max(yTop, b.y + b.h);
    yBot = Math.min(yBot, b.y - b.h * 0.25);
  }
  return found ? { x0, x1, yTop, yBot, baseline, fontH } : null;
}

function canvasToJpegBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('canvas.toBlob returned null'));
        blob.arrayBuffer().then((ab) => resolve(new Uint8Array(ab)), reject);
      },
      'image/jpeg',
      0.85,
    );
  });
}

/**
 * Pseudonymizing render: rasterize each page, paint over every detected span
 * with the page background, then draw its pseudonym (e.g. "Person_1") in place,
 * and rebuild the PDF from those images. The output has no text layer, so the
 * original values are gone — not merely hidden — while the document still reads
 * naturally with the replacements.
 */
export async function redactToPdf(
  doc: PdfDoc,
  pages: PageText[],
  spansByPage: DetectedSpan[][],
  getLabel: (span: DetectedSpan) => string,
  scale = 2,
): Promise<RedactResult> {
  const { PDFDocument } = await import('pdf-lib');
  const outPdf = await PDFDocument.create();
  let redactionCount = 0;
  const pad = 2;

  for (let p = 0; p < pages.length; p++) {
    const pageInfo = pages[p];
    const page = await doc.getPage(p + 1);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas context unavailable');

    await page.render({ canvasContext: ctx, viewport }).promise;

    for (const span of spansByPage[p]) {
      const rect = spanRect(pageInfo, span);
      if (!rect) continue;
      redactionCount++;
      const cx = rect.x0 * scale;
      const cw = (rect.x1 - rect.x0) * scale;
      const cyTop = (pageInfo.height - rect.yTop) * scale;
      const ch = (rect.yTop - rect.yBot) * scale;

      // Cover the original text.
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(cx - pad, cyTop - pad, cw + pad * 2, ch + pad * 2);

      // Draw the pseudonym, shrinking to fit the original footprint width.
      const label = getLabel(span);
      let fontPx = rect.fontH * scale;
      ctx.font = `${fontPx}px sans-serif`;
      const textW = ctx.measureText(label).width;
      if (cw > 0 && textW > cw) {
        fontPx *= cw / textW;
        ctx.font = `${fontPx}px sans-serif`;
      }
      ctx.fillStyle = '#111111';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(label, cx, (pageInfo.height - rect.baseline) * scale);
    }

    const jpgBytes = await canvasToJpegBytes(canvas);
    const img = await outPdf.embedJpg(jpgBytes);
    const out = outPdf.addPage([pageInfo.width, pageInfo.height]);
    out.drawImage(img, { x: 0, y: 0, width: pageInfo.width, height: pageInfo.height });
  }

  const pdfBytes = await outPdf.save();
  return { pdfBytes, redactionCount };
}
