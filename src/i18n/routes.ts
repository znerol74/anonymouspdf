import { pages } from '../content/pages';
import type { Lang } from './site';

export type AltLink = { locale: Lang; path: string };

/** Localized URL path for a concept in a locale, or null if it has no page there. */
export function pathFor(pageKey: string, lang: Lang): string | null {
  const entry = pages[pageKey]?.locales[lang];
  if (!entry) return null;
  return entry.slug === '' ? `/${lang}/` : `/${lang}/${entry.slug}/`;
}

/**
 * Reciprocal hreflang alternates for a concept: one entry per locale that
 * actually has the page. Slugs differ per language (each is its own keyword),
 * so pages are paired by their semantic concept key.
 */
export function alternatesFor(pageKey: string): AltLink[] {
  const def = pages[pageKey];
  if (!def) return [];
  return (Object.keys(def.locales) as Lang[]).map((locale) => ({
    locale,
    path: pathFor(pageKey, locale)!,
  }));
}
