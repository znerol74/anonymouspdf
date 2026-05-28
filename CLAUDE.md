# AnonymousPDF — Project Guide

AnonymousPDF (**anonymouspdf.com**) is a free, **100% in-browser** PDF
anonymization tool with SEO landing pages. A user uploads a PDF → the tool
auto-detects sensitive data (emails, phone numbers, IBANs, IDs, names, dates, …) →
**replaces each value with a consistent pseudonym** (`Person_1`, `ORG_1`, `Date_1`, …) →
they download the anonymized PDF and/or download/copy the anonymized text.
**Nothing is ever uploaded** — all processing happens client-side in the browser.

Stack: **Astro 5** (static output) + a **React 18 island** for the tool, **Tailwind v4**,
bilingual (**English + German**), SEO-first.

---

## Status

Live in production at **https://anonymouspdf.com** (Cloudflare Pages). GitHub:
`znerol74/anonymouspdf`, branch `main`. Browser-verified end-to-end (model load,
detection, pseudonym replacement in both the PDF and the copied text).

Deploy is **direct-upload via wrangler**, NOT git-connected — pushing to GitHub
does **not** auto-deploy. To ship a change:
```bash
pnpm build
CLOUDFLARE_ACCOUNT_ID=790369fbd60bd3d4d6e34bacbd0c854d \
  npx wrangler pages deploy dist --project-name=anonymouspdf --branch=main
```
The `anonymouspdf.com` zone and the `anonymouspdf` Pages project both live in
**Moritz@lumetsberger.com's** Cloudflare account (`790369fbd60bd3d4d6e34bacbd0c854d`).
Setting up push-to-deploy would need a one-time GitHub connect in the dashboard.

---

## Commands
- `pnpm dev` — dev server
- `pnpm build` — static build → `dist/`
- `pnpm preview` — serve the built `dist/`
- `pnpm check` — `astro check` (TypeScript / Astro diagnostics)
- `pnpm test` — unit tests (regex detectors + NER aggregation + pseudonyms), via `tsx`

Node 22 (see `.node-version`), pnpm.

---

## Project structure
```
astro.config.mjs            # site URL, i18n (/en,/de), `/`→`/en/` redirect, integrations
src/
  layouts/BaseLayout.astro  # <head>: SEO (canonical, hreflang, OG, JSON-LD) + GA4 tag
  components/
    Header.astro, Footer.astro, LanguageSwitcher.astro
    HomeContent.astro        # homepage body (hero + tool + value props)
    Landing.astro            # shared landing template (hero + tool + intro + FAQ + trust)
    RedactionTool.tsx        # the React island: UI + orchestrates the pipeline
  pages/
    en/index.astro, de/index.astro            # homepages
    en/redact-pdf.astro, en/anonymize-pdf.astro, en/redaction-tool.astro, en/data-masking.astro
    de/pdf-schwaerzen.astro, de/pdf-anonymisieren.astro, de/dokument-schwaerzen.astro
  content/landing.ts         # ALL landing-page copy + FAQs (edit marketing text here)
  i18n/ui.ts, utils.ts, routes.ts   # UI strings, helpers, hreflang pairing
  tool/                      # framework-agnostic logic (no React/Astro imports)
    types.ts                 # EntityType union, PRECEDENCE, PSEUDONYM_BASE
    detect/regex.ts          # deterministic pattern detectors (incl. dates)
    detect/ner.ts            # transformers.js NER (person/org/location) + BIO aggregation
    detect/index.ts          # overlap resolution (re-exports runRegexLayer)
    pdf/extract.ts           # pdf.js: page text + per-character geometry
    pdf/redact.ts            # rasterize page → cover spans + draw pseudonyms → rebuild PDF
    anonymize.ts             # consistent pseudonym map + text replacement
    strings.ts               # tool UI strings (en/de)
  styles/global.css          # Tailwind import + brand color tokens
public/                      # logo.png, favicon.png, og/default.png, robots.txt, _headers
test/                        # regex.test.mts, ner.test.mts, anonymize.test.mts
```
The `/` → `/en/` redirect is configured in `astro.config.mjs` (`redirects`), not a page file.

---

## How the tool works (`RedactionTool.tsx` pipeline)
1. Read file → `loadPdf` (pdf.js) → `extractPages` builds, per page, the concatenated
   text plus a bounding box for **every character**.
2. Per page: `runRegexLayer` (patterns) + `runNer` (AI names) → `resolveOverlaps`
   (higher-precedence span wins; regex > NER).
3. `buildPseudonyms`: assign a document-wide, per-type numbered pseudonym to each
   distinct value (same value → same number, e.g. every "John Smith" → `Person_1`).
4. `redactToPdf`: render each page to a canvas at 2× → **cover each detected span**
   (white) and **draw its pseudonym** (`Person_1`, …, fit-to-width) in place → rebuild
   the PDF from those images. **The output has no text layer**, so the original values
   are gone (not merely hidden) while the document still reads naturally. (Tradeoff: the
   PDF is image-based / not text-selectable, and the replacement font/alignment is
   approximate.)
5. `applyPseudonyms`: the anonymized text (same replacements) for **Copy text** /
   **Download text**. The on-screen preview shows the original text with detected
   entities highlighted per-type (see `TYPE_COLORS` in `RedactionTool.tsx`).

Heavy deps (pdf.js, transformers.js, ONNX wasm) are **dynamically imported** only when
a file is processed, so the initial page stays light.

NER model: `Xenova/bert-base-multilingual-cased-ner-hrl` (set in `src/tool/detect/ner.ts`).
Downloads from the Hugging Face CDN on first use; the browser caches it afterwards.

---

## Detection design (read before changing patterns)
- **No per-item review step** (the chosen UX is: detect → preview → download/copy).
  So detection is **tuned for precision over recall** — better to miss than to wrongly
  replace, because the user cannot undo individual items.
- **Dates ARE detected** (numeric `15.03.2024`, ISO `2024-12-31`, month-name EN/DE, and
  standalone `(19|20)\d{2}` years) and pseudonymized as `Date_n`. Standalone years accept
  some false positives by design (the product now masks rather than redacts).
- Still deliberately **excluded**: a broad "any 4+ digit number" catch-all.
- Patterns include AT/DE-specific IDs (SVNR; Aktenzeichen with OGH-citation exclusion;
  Firmenbuchnummer; Einlagezahl; Kennzeichen with a KFZ-code allowlist) plus generic
  email / phone / IBAN / URL / IPv4 and Luhn-checked credit cards.
- `test/regex.test.mts` pins this behavior — **run `pnpm test` after editing patterns.**

---

## i18n & SEO
- Two languages under `/en` and `/de`. Default locale `en`; both are prefixed.
- hreflang pairing lives in `src/i18n/routes.ts` (`pageAlternates`). Paired pages
  cross-link (e.g. `/en/redact-pdf` ↔ `/de/pdf-schwaerzen`) with reciprocal `hreflang`
  + `x-default`; single-language pages have **no** fabricated alternate.
- Each landing page sets title, meta description, and `FAQPage` JSON-LD. `@astrojs/sitemap`
  emits the sitemap; `public/robots.txt` references it; `public/_headers` long-caches
  hashed assets.

### To add a landing page
1. Add a copy entry (with FAQ) to `src/content/landing.ts`.
2. Add `src/pages/<lang>/<slug>.astro` that imports `BaseLayout` + `Landing`, passing the
   copy and `alternatesFor('<key>')`.
3. If it has a translation, add the slug pair to `pageAlternates` in `src/i18n/routes.ts`.
4. Add it to the footer nav in `src/components/Footer.astro`.

---

## Deployment (Cloudflare Pages)
Currently a **direct-upload** Pages project named `anonymouspdf` in
**Moritz@lumetsberger.com's** account (`790369fbd60bd3d4d6e34bacbd0c854d`), where the
`anonymouspdf.com` zone also lives. There is **no git integration**, so deploys are manual:
```bash
pnpm build
CLOUDFLARE_ACCOUNT_ID=790369fbd60bd3d4d6e34bacbd0c854d \
  npx wrangler pages deploy dist --project-name=anonymouspdf --branch=main
```
Custom domains `anonymouspdf.com` + `www` are attached (proxied CNAMEs →
`anonymouspdf.pages.dev`). `astro.config.mjs` `site` is `https://anonymouspdf.com`
(canonical URLs + sitemap depend on it).

To switch to **push-to-deploy**, connect the repo once in the dashboard
(**Workers & Pages → the project → Settings → Builds & deployments → Connect to Git**,
preset Astro, build `pnpm build`, output `dist`, branch `main`); the OAuth step can't be
done via API. Notes: the ONNX `.wasm` runtime is ~21 MB (under Cloudflare's 25 MB/file
limit); `_headers` caches `/_astro/*` and `*.wasm` immutably.

---

## Analytics
- GA4 is wired in `src/layouts/BaseLayout.astro` (measurement ID `G-RP56CCTV9B`).
- Search Console: add the property and verify via the **Google Analytics** method (the
  GA tag is already in `<head>`), then submit `https://anonymouspdf.com/sitemap-index.xml`.
- GA currently loads unconditionally; if you need EU cookie consent, gate the gtag snippet.

---

## Known issues / notes
- **transformers.js returns raw BIO tokens.** It ignores `aggregation_strategy` and
  returns per-token `entity: "B-PER"/"I-PER"` with **no char offsets**. `aggregateNerTokens`
  (in `ner.ts`) merges BIO runs and recovers offsets by locating each token in the source
  text — don't assume `start`/`end` come back from the pipeline. Covered by `ner.test.mts`.
- **PDF replacement is rasterized + approximate.** Pseudonyms are drawn onto the rendered
  page with a sans-serif fallback, shrink-to-fit on width; font/baseline won't match the
  original exactly, and long pseudonyms get scaled down. Good enough; not pixel-perfect.
- **First-run weight:** the NER model (hundreds of MB) + ONNX runtime download on first
  use — an accepted tradeoff. Runs **single-threaded** (no COOP/COEP cross-origin-isolation
  headers are set, so `SharedArrayBuffer` is unavailable). Consider self-hosting the
  wasm/model later.

---

## Product constraints — please preserve
- **100% client-side.** Never add server-side upload of user files; the privacy promise
  is the core value proposition.
- **No reference to the related desktop product** anywhere in source, comments, history,
  or the site. This repo has been scrubbed — keep it that way.
- **Anonymization by replacement.** Detected values are replaced with consistent
  pseudonyms (`Person_1`, …). The PDF is rebuilt from rasterized pages (no text layer),
  so the original values are removed, not merely hidden — never ship output where the
  original text remains recoverable (e.g. cosmetic boxes over live text).
- Brand: wordmark **"AnonymousPDF"**; logo/favicon/OG image are in `public/`.
