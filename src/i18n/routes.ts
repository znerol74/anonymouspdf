import type { Lang } from './ui';

export type AltLink = { locale: Lang; path: string };

// Reciprocal hreflang pairs. Slugs differ per language (each is its own keyword),
// so pages are paired semantically. Only locales with a real equivalent are listed;
// single-language pages simply have no alternate in the other language.
export const pageAlternates: Record<string, Partial<Record<Lang, string>>> = {
  home: { en: '/en/', de: '/de/' },
  'redact-pdf': { en: '/en/redact-pdf/', de: '/de/pdf-schwaerzen/' },
  'anonymize-pdf': { en: '/en/anonymize-pdf/', de: '/de/pdf-anonymisieren/' },
  'redaction-tool': { en: '/en/redaction-tool/' },
  'data-masking': { en: '/en/data-masking/' },
  'dokument-schwaerzen': { de: '/de/dokument-schwaerzen/' },
};

export function alternatesFor(key: string): AltLink[] {
  const map = pageAlternates[key] ?? {};
  return (Object.entries(map) as [Lang, string][]).map(([locale, path]) => ({ locale, path }));
}
