# AnonymousPDF — Project Guide

AnonymousPDF (**anonymouspdf.com**) is a free, **100% in-browser** PDF
anonymization tool with SEO landing pages. A user uploads a PDF → the tool
auto-detects sensitive data (emails, phone numbers, IBANs, IDs, names, dates, …) →
**replaces each value with a consistent pseudonym** (`Person_1`, `ORG_1`, `Date_1`, …) →
they download the anonymized PDF and/or download/copy the anonymized text.
**Nothing is ever uploaded** — all processing happens client-side in the browser.

Stack: **Astro 5** (static output) + a **React 18 island** for the tool, **Tailwind v4**,
**10 languages** (`en, de, es, fr, it, pt, nl, ar [RTL], lv, zh`), SEO-first.

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
    [...slug].astro          # ONE catch-all: getStaticPaths generates every locale×concept
  content/
    pages.ts                 # SLUGS table (concept→slug per locale) + COPY map → page registry
    landing/<lang>.ts        # per-locale LandingCopy (en,de,es,fr,it,pt,nl,ar,lv,zh)
    landing/types.ts         # LandingCopy/HomeMeta types + faqLd()/webAppLd()
    home.ts                  # per-locale home SEO meta
  i18n/site.ts, ui.ts, utils.ts, routes.ts  # locales/Lang/LOCALE_META, UI strings, helpers, pathFor/hreflang
  tool/                      # framework-agnostic logic (no React/Astro imports)
    types.ts                 # EntityType union, PRECEDENCE, PSEUDONYM_BASE
    detect/regex.ts          # deterministic pattern detectors (incl. dates)
    detect/ner.ts            # transformers.js NER (person/org/location) + BIO aggregation
    detect/index.ts          # overlap resolution (re-exports runRegexLayer)
    pdf/extract.ts           # pdf.js: page text + per-character geometry
    pdf/redact.ts            # rasterize page → cover spans + draw pseudonyms → rebuild PDF
    anonymize.ts             # consistent pseudonym map + text replacement
    strings.ts               # tool UI strings (per locale, EN fallback)
  styles/global.css          # Tailwind import + brand color tokens
public/                      # logo.png, favicon.png, og/default.png, robots.txt, _headers
test/                        # regex.test.mts, ner.test.mts, anonymize.test.mts
```
The `/` → `/en/` redirect is a server-side 301 in `public/_redirects` (no client-side flash).

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

## i18n & SEO (data-driven)
Every page is generated from data by ONE catch-all route — `src/pages/[...slug].astro`
+ `getStaticPaths` — there are **no** hand-authored page files. Sources of truth:
- `src/i18n/site.ts` — `LOCALES` (all 10 supported), `LIVE_LOCALES` (currently published;
  generation + the language switcher iterate this), `Lang`, `defaultLang`, and `LOCALE_META`
  (`dir` for RTL, `ogLocale`, `htmlLang`). The central `Lang` type is used everywhere.
- `src/content/pages.ts` — a `SLUGS` table (concept id → localized slug per locale, e.g.
  `redact-pdf` → en `redact-pdf`, de `pdf-schwaerzen`, es `tachar-pdf`) + a `COPY` map of
  per-locale modules. `pages` is built from these; `routes.ts` `pathFor`/`alternatesFor`
  derive URLs + hreflang from it. Existing en/de slugs are preserved exactly.
- `src/content/landing/<lang>.ts` — per-locale `LandingCopy` for each concept. `home.ts` —
  per-locale home SEO meta. `src/i18n/ui/` is `ui.ts` (per-locale UI strings; `t()` falls
  back to `defaultLang`). `src/tool/strings.ts` — island strings per locale (EN fallback).
- hreflang: reciprocal `<link rel=alternate>` per cluster + `x-default` in `BaseLayout`,
  AND injected into the sitemap via a custom `serialize` in `astro.config.mjs` (the built-in
  sitemap i18n option can't pair per-locale-differing slugs). RTL: `<html dir="rtl">` for `ar`;
  use logical Tailwind classes (`text-start`, not `text-left`).
- Each landing page sets title, meta description and `FAQPage` JSON-LD; home sets
  `WebApplication` JSON-LD. `public/robots.txt` references the sitemap; `public/_headers`
  long-caches hashed assets; `public/_redirects` does the server-side `/`→`/en/` 301.

### To add a language
1. `src/content/landing/<lang>.ts` (12 concepts), a `<lang>` block in `src/i18n/ui.ts` and
   `src/tool/strings.ts`, and a `<lang>` entry in `src/content/home.ts`.
2. Add the localized slug for each concept under that locale in `SLUGS` (`pages.ts`),
   import the copy module into `COPY`, and add the locale to `LIVE_LOCALES` (`site.ts`).
   (`LOCALE_META` already has all 10.) Build — pages, nav, hreflang and sitemap update automatically.

### To add a concept (landing angle)
Add a `SLUGS['<concept>']` row (slug per locale), the copy under each locale's landing
module, and the key to `FOOTER_KEYS` in `Footer.astro`. **Keep copy genuinely differentiated
per concept** (distinct intro/FAQ) — templated near-duplicates risk Google's thin-content filter.

---

## Deployment (Cloudflare Pages)
Direct-upload Pages project `anonymouspdf` in **Moritz@lumetsberger.com's** account
(`790369fbd60bd3d4d6e34bacbd0c854d`), where the `anonymouspdf.com` zone also lives.
Custom domains `anonymouspdf.com` + `www` are attached (proxied CNAMEs → `anonymouspdf.pages.dev`).

**Auto-deploy on push to `main`** via GitHub Actions (`.github/workflows/deploy.yml`):
install → test → build → `npx wrangler pages deploy`. It uses the `CLOUDFLARE_API_TOKEN`
repo secret (Cloudflare Pages: Edit, scoped to the account) — the account ID is inlined.
There is no Cloudflare↔GitHub git integration (the repo lives under a different GitHub
account than the CF app's), so this Action is the deploy mechanism.

Manual deploy (if ever needed): `pnpm build && CLOUDFLARE_ACCOUNT_ID=790369fbd60bd3d4d6e34bacbd0c854d
npx wrangler pages deploy dist --project-name=anonymouspdf --branch=main`.

Notes: the ONNX `.wasm` runtime is ~21 MB (under Cloudflare's 25 MB/file limit); `_headers`
caches `/_astro/*` and `*.wasm` immutably. `astro.config.mjs` `site` is `https://anonymouspdf.com`.

---

## Analytics
- GA4 is wired in `src/layouts/BaseLayout.astro` (measurement ID `G-RP56CCTV9B`).
- The tool funnel is tracked via `gtag` events in `RedactionTool.tsx` (no PII, only step +
  aggregate counts): `file_selected` → `process_complete` (`redactions`, `pages`) →
  `download_pdf` / `download_text` / `copy_text`, plus `process_error`.
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
