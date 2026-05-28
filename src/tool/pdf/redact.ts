import type { DetectedSpan } from '../types';
import type { PageText, PdfDoc } from './extract';

export interface RedactResult {
  pdfBytes: Uint8Array;
  /** PNG data URLs of the first few redacted pages, for the on-screen preview. */
  previews: string[];
  redactionCount: number;
}

interface Rect {
  x0: number;
  x1: number;
  yTop: number;
  yBot: number;
}

function spanRect(page: PageText, span: DetectedSpan): Rect | null {
  const start = Math.max(0, span.start);
  const end = Math.min(page.boxes.length, span.end);
  let x0 = Infinity;
  let x1 = -Infinity;
  let yTop = -Infinity;
  let yBot = Infinity;
  let found = false;
  for (let i = start; i < end; i++) {
    const b = page.boxes[i];
    if (!b || b.w === 0) continue;
    found = true;
    x0 = Math.min(x0, b.x);
    x1 = Math.max(x1, b.x + b.w);
    yTop = Math.max(yTop, b.y + b.h);
    yBot = Math.min(yBot, b.y - b.h * 0.25);
  }
  return found ? { x0, x1, yTop, yBot } : null;
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
 * True redaction: render each page to a raster, paint opaque black boxes over
 * the detected spans, then rebuild the PDF from those images. The output has
 * no text layer at all, so redacted content cannot be recovered.
 */
export async function redactToPdf(
  doc: PdfDoc,
  pages: PageText[],
  spansByPage: DetectedSpan[][],
  scale = 2,
  maxPreviews = 5,
): Promise<RedactResult> {
  const { PDFDocument } = await import('pdf-lib');
  const outPdf = await PDFDocument.create();
  const previews: string[] = [];
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

    ctx.fillStyle = '#000000';
    for (const span of spansByPage[p]) {
      const rect = spanRect(pageInfo, span);
      if (!rect) continue;
      redactionCount++;
      const cx = rect.x0 * scale;
      const cw = (rect.x1 - rect.x0) * scale;
      const cy = (pageInfo.height - rect.yTop) * scale;
      const ch = (rect.yTop - rect.yBot) * scale;
      ctx.fillRect(cx - pad, cy - pad, cw + pad * 2, ch + pad * 2);
    }

    if (previews.length < maxPreviews) previews.push(canvas.toDataURL('image/png'));

    const jpgBytes = await canvasToJpegBytes(canvas);
    const img = await outPdf.embedJpg(jpgBytes);
    const out = outPdf.addPage([pageInfo.width, pageInfo.height]);
    out.drawImage(img, { x: 0, y: 0, width: pageInfo.width, height: pageInfo.height });
  }

  const pdfBytes = await outPdf.save();
  return { pdfBytes, previews, redactionCount };
}
