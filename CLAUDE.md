# AnonymousPDF — Project Guide

AnonymousPDF (**anonymouspdf.com**) is a free, **100% in-browser** PDF redaction &
anonymization tool with SEO landing pages. A user uploads a PDF → the tool
auto-detects sensitive data (emails, phone numbers, IBANs, IDs, names, …) →
permanently redacts it → they download the redacted PDF or copy the cleaned
text. **Nothing is ever uploaded** — all processing happens client-side in the
browser.

Stack: **Astro 5** (static output) + a **React 18 island** for the tool, **Tailwind v4**,
bilingual (**English + German**), SEO-first.

---

## Status & immediate next steps

This repo was prepared in a sandbox that **could not push to GitHub or deploy**
(no credentials / network egress there). Do these on this machine:

1. **Push to GitHub** (the empty repo `znerol74/anonymouspdf` already exists). If you
   cloned this from the `.bundle`, `origin` points at the bundle file — repoint it:
   ```bash
   git remote set-url origin git@github.com:znerol74/anonymouspdf.git
   git push -u origin main
   ```
2. **Install & sanity-check:**
   ```bash
   pnpm install
   pnpm test     # 25 detector unit tests — should all pass
   pnpm build    # static build into dist/
   pnpm dev      # http://localhost:4321
   ```
3. **Verify the tool in a real browser — THIS IS THE ONE THING NEVER TESTED.**
   The build sandbox blocked the model host, so the live runtime (AI model load +
   canvas redaction) has not been exercised. With `pnpm dev`, open the site and
   drop a real PDF, then confirm:
   - the NER model downloads on first run (progress bar shows), then detection runs;
   - **names actually get redacted** (depends on the NER offset assumption — see
     "Known issues");
   - the preview shows black boxes, and **Download PDF** + **Copy text** work.
4. **Deploy** to Cloudflare Pages — see "Deployment" below.

---

## Commands
- `pnpm dev` — dev server
- `pnpm build` — static build → `dist/`
- `pnpm preview` — serve the built `dist/`
- `pnpm check` — `astro check` (TypeScript / Astro diagnostics)
- `pnpm test` — detector unit tests (runs via `tsx`)

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
    types.ts                 # EntityType union, PRECEDENCE, TYPE_LABELS
    detect/regex.ts          # deterministic pattern detectors
    detect/ner.ts            # transformers.js NER (person/org/location)
    detect/index.ts          # overlap resolution (re-exports runRegexLayer)
    pdf/extract.ts           # pdf.js: page text + per-character geometry
    pdf/redact.ts            # rasterize page → paint black boxes → rebuild PDF
    redactText.ts            # cleaned-text output with [LABEL]s
    strings.ts               # tool UI strings (en/de)
  styles/global.css          # Tailwind import + brand color tokens
public/                      # logo.png, favicon.png, og/default.png, robots.txt, _headers
test/regex.test.mts          # detector unit tests
```
The `/` → `/en/` redirect is configured in `astro.config.mjs` (`redirects`), not a page file.

---

## How the tool works (`RedactionTool.tsx` pipeline)
1. Read file → `loadPdf` (pdf.js) → `extractPages` builds, per page, the concatenated
   text plus a bounding box for **every character**.
2. Per page: `runRegexLayer` (patterns) + `runNer` (AI names) → `resolveOverlaps`
   (higher-precedence span wins; regex > NER).
3. `redactToPdf`: render each page to a canvas at 2× → paint **opaque black boxes**
   over detected spans → rebuild the PDF from those images. **The output has no text
   layer**, so redacted content cannot be recovered. (Tradeoff: the downloaded PDF is
   image-based / not text-selectable. This is the security model — do not replace it
   with cosmetic boxes over live text.)
4. `redactText`: cleaned text with type labels (`[EMAIL]`, `[NAME]`, …) for "Copy text".

Heavy deps (pdf.js, transformers.js, ONNX wasm) are **dynamically imported** only when
a file is processed, so the initial page stays light.

NER model: `Xenova/bert-base-multilingual-cased-ner-hrl` (set in `src/tool/detect/ner.ts`).
Downloads from the Hugging Face CDN on first use; the browser caches it afterwards.

---

## Detection design (read before changing patterns)
- **No per-item review step** (the chosen UX is: detect → preview → download/copy).
  So detection is **tuned for precision over recall** — better to miss than to wrongly
  redact, because the user cannot undo individual items.
- Deliberately **excluded**: a broad "any 4+ digit number" catch-all, and standalone
  dates (too many false positives without a review gate).
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
Connect `znerol74/anonymouspdf` in Cloudflare Pages → **Workers & Pages → Create → Pages → Connect to Git**:
- **Production branch:** `main`
- **Framework preset:** Astro
- **Build command:** `pnpm build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- Node 22 is auto-detected from `.node-version` (else set env `NODE_VERSION=22`).

Then add the **custom domain `anonymouspdf.com`** (+ optional `www`) in the Pages project
and point DNS at your registrar / Cloudflare. `astro.config.mjs` `site` is already
`https://anonymouspdf.com` (canonical URLs + sitemap depend on it).

Notes: the ONNX `.wasm` runtime is ~21 MB (under Cloudflare's 25 MB/file limit);
`_headers` caches `/_astro/*` and `*.wasm` immutably. After connecting, every push to
`main` auto-deploys.

---

## Analytics
- GA4 is wired in `src/layouts/BaseLayout.astro` (measurement ID `G-RP56CCTV9B`).
- Search Console: add the property and verify via the **Google Analytics** method (the
  GA tag is already in `<head>`), then submit `https://anonymouspdf.com/sitemap-index.xml`.
- GA currently loads unconditionally; if you need EU cookie consent, gate the gtag snippet.

---

## Known issues / unverified
- **Never run in a real browser yet.** Build, typecheck, and the 25 detector unit tests
  pass, but the live runtime (model load + canvas redaction) was untestable in the build
  sandbox. Verify per step 3 in "immediate next steps".
- **NER offset assumption:** `runNer` relies on transformers.js returning character
  `start`/`end` for each entity (with `aggregation_strategy: 'simple'`). If names are
  detected but not redacted, log a pipeline result and confirm `start`/`end` exist; if
  not, derive offsets from the entity `word` or pick another model. Regex detection is
  unaffected.
- **First-run weight:** the NER model (hundreds of MB) + ONNX runtime download on first
  use — an accepted tradeoff. Consider hosting the wasm/model on your own origin later.

---

## Product constraints — please preserve
- **100% client-side.** Never add server-side upload of user files; the privacy promise
  is the core value proposition.
- **No reference to the related desktop product** anywhere in source, comments, history,
  or the site. This repo has been scrubbed — keep it that way.
- **True redaction only** — never ship cosmetic black boxes over still-present text.
- Brand: wordmark **"AnonymousPDF"**; logo/favicon/OG image are in `public/`.
