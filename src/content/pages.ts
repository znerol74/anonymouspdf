import type { Lang } from '../i18n/site';
import type { HomeMeta, LandingCopy } from './landing/types';
import { en } from './landing/en';
import { de } from './landing/de';
import { homeMeta } from './home';

export type PageKind = 'home' | 'landing';

export interface PageLocaleEntry {
  /** Localized URL slug (the locale prefix is added by the router). '' = homepage. */
  slug: string;
  copy: LandingCopy | HomeMeta;
}

export interface PageDef {
  kind: PageKind;
  /** Only locales with authored copy appear here — they alone get a page + hreflang. */
  locales: Partial<Record<Lang, PageLocaleEntry>>;
}

// The page registry. Keys are stable semantic concept ids; per-locale `slug` is
// the localized keyword. Existing en/de slugs are preserved exactly so already
// indexed URLs don't change. Add a locale to a concept = one entry here.
export const pages: Record<string, PageDef> = {
  home: {
    kind: 'home',
    locales: {
      en: { slug: '', copy: homeMeta.en! },
      de: { slug: '', copy: homeMeta.de! },
    },
  },
  'redact-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'redact-pdf', copy: en['redact-pdf'] },
      de: { slug: 'pdf-schwaerzen', copy: de['redact-pdf'] },
    },
  },
  'anonymize-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'anonymize-pdf', copy: en['anonymize-pdf'] },
      de: { slug: 'pdf-anonymisieren', copy: de['anonymize-pdf'] },
    },
  },
  'redaction-tool': {
    kind: 'landing',
    locales: {
      en: { slug: 'redaction-tool', copy: en['redaction-tool'] },
    },
  },
  'data-masking': {
    kind: 'landing',
    locales: {
      en: { slug: 'data-masking', copy: en['data-masking'] },
    },
  },
  'document-redact': {
    kind: 'landing',
    locales: {
      de: { slug: 'dokument-schwaerzen', copy: de['document-redact'] },
    },
  },
};
