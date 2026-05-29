// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { pages } from './src/content/pages';
import { alternatesFor } from './src/i18n/routes';
import { defaultLang } from './src/i18n/site';

const SITE = 'https://anonymouspdf.com';

// Precompute hreflang alternates per URL so the sitemap carries the same
// reciprocal clusters (+ x-default) as each page's <head>. The built-in sitemap
// i18n option can't pair our per-locale-differing slugs, so we do it manually.
const urlLinks = new Map();
for (const pageKey of Object.keys(pages)) {
  const alts = alternatesFor(pageKey);
  if (alts.length === 0) continue;
  /** @type {{ lang: string; url: string }[]} */
  const links = alts.map((a) => ({ lang: a.locale, url: new URL(a.path, SITE).href }));
  const def = alts.find((a) => a.locale === defaultLang) ?? alts[0];
  links.push({ lang: 'x-default', url: new URL(def.path, SITE).href });
  for (const a of alts) urlLinks.set(new URL(a.path, SITE).href, links);
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const links = urlLinks.get(item.url);
        if (links) item.links = links;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
