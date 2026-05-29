import type { Lang } from '../i18n/site';
import type { HomeMeta, LandingCopy } from './landing/types';
import { en } from './landing/en';
import { de } from './landing/de';
import { es } from './landing/es';
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
      es: { slug: '', copy: homeMeta.es! },
    },
  },
  'redact-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'redact-pdf', copy: en['redact-pdf'] },
      de: { slug: 'pdf-schwaerzen', copy: de['redact-pdf'] },
      es: { slug: 'tachar-pdf', copy: es['redact-pdf'] },
    },
  },
  'anonymize-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'anonymize-pdf', copy: en['anonymize-pdf'] },
      de: { slug: 'pdf-anonymisieren', copy: de['anonymize-pdf'] },
      es: { slug: 'anonimizar-pdf', copy: es['anonymize-pdf'] },
    },
  },
  'redaction-tool': {
    kind: 'landing',
    locales: {
      en: { slug: 'redaction-tool', copy: en['redaction-tool'] },
      es: { slug: 'herramienta-tachar-pdf', copy: es['redaction-tool'] },
    },
  },
  'data-masking': {
    kind: 'landing',
    locales: {
      en: { slug: 'data-masking', copy: en['data-masking'] },
      es: { slug: 'enmascarar-datos-pdf', copy: es['data-masking'] },
    },
  },
  'pseudonymize-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'pseudonymize-pdf', copy: en['pseudonymize-pdf'] },
      es: { slug: 'seudonimizar-pdf', copy: es['pseudonymize-pdf'] },
    },
  },
  'gdpr-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'gdpr-pdf', copy: en['gdpr-pdf'] },
      es: { slug: 'rgpd-pdf', copy: es['gdpr-pdf'] },
    },
  },
  'remove-names-from-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'remove-names-from-pdf', copy: en['remove-names-from-pdf'] },
      es: { slug: 'eliminar-nombres-pdf', copy: es['remove-names-from-pdf'] },
    },
  },
  'censor-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'censor-pdf', copy: en['censor-pdf'] },
      es: { slug: 'censurar-pdf', copy: es['censor-pdf'] },
    },
  },
  'black-out-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'black-out-pdf', copy: en['black-out-pdf'] },
      es: { slug: 'ennegrecer-pdf', copy: es['black-out-pdf'] },
    },
  },
  'hide-information-in-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'hide-information-in-pdf', copy: en['hide-information-in-pdf'] },
      es: { slug: 'ocultar-informacion-pdf', copy: es['hide-information-in-pdf'] },
    },
  },
  'remove-personal-information-pdf': {
    kind: 'landing',
    locales: {
      en: { slug: 'remove-personal-information-pdf', copy: en['remove-personal-information-pdf'] },
      es: { slug: 'eliminar-datos-personales-pdf', copy: es['remove-personal-information-pdf'] },
    },
  },
  'document-redact': {
    kind: 'landing',
    locales: {
      en: { slug: 'redact-document', copy: en['document-redact'] },
      de: { slug: 'dokument-schwaerzen', copy: de['document-redact'] },
      es: { slug: 'censurar-documento', copy: es['document-redact'] },
    },
  },
};
