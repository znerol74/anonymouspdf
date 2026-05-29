import type { Lang } from '../i18n/site';
import type { HomeMeta, LandingCopy } from './landing/types';
import { en } from './landing/en';
import { de } from './landing/de';
import { es } from './landing/es';
import { fr } from './landing/fr';
import { it } from './landing/it';
import { pt } from './landing/pt';
import { nl } from './landing/nl';
import { ar } from './landing/ar';
import { lv } from './landing/lv';
import { zh } from './landing/zh';
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

// Per-locale copy modules. Add a new language = create landing/<lang>.ts, import
// it here, add its slugs to SLUGS, and add it to LIVE_LOCALES in site.ts.
const COPY: Partial<Record<Lang, Record<string, LandingCopy>>> = { en, de, es, fr, it, pt, nl, ar, lv, zh };

// Central slug table: concept id → localized URL slug per locale. Existing en/de
// slugs are preserved exactly. A locale generates a page for a concept only when
// it has BOTH a slug here and authored copy in COPY (or homeMeta for 'home').
const SLUGS: Record<string, Partial<Record<Lang, string>>> = {
  home: { en: '', de: '', es: '', fr: '', it: '', pt: '', nl: '', ar: '', lv: '', zh: '' },
  'redact-pdf': { en: 'redact-pdf', de: 'pdf-schwaerzen', es: 'tachar-pdf', fr: 'caviarder-pdf', it: 'oscurare-pdf', pt: 'ocultar-pdf', nl: 'pdf-zwartlakken', ar: 'redact-pdf', lv: 'aizkrasot-pdf', zh: 'redact-pdf' },
  'anonymize-pdf': { en: 'anonymize-pdf', de: 'pdf-anonymisieren', es: 'anonimizar-pdf', fr: 'anonymiser-pdf', it: 'anonimizzare-pdf', pt: 'anonimizar-pdf', nl: 'pdf-anonimiseren', ar: 'anonymize-pdf', lv: 'anonimizet-pdf', zh: 'anonymize-pdf' },
  'redaction-tool': { en: 'redaction-tool', de: 'schwaerzungstool', es: 'herramienta-tachar-pdf', fr: 'outil-caviardage', it: 'strumento-oscuramento', pt: 'ferramenta-ocultar', nl: 'redactie-tool', ar: 'redaction-tool', lv: 'aizkrasosanas-riks', zh: 'redaction-tool' },
  'data-masking': { en: 'data-masking', de: 'daten-maskieren', es: 'enmascarar-datos-pdf', fr: 'masquage-de-donnees', it: 'mascheramento-dati', pt: 'mascaramento-de-dados', nl: 'data-maskeren', ar: 'data-masking', lv: 'datu-maskesana', zh: 'data-masking' },
  'pseudonymize-pdf': { en: 'pseudonymize-pdf', de: 'pdf-pseudonymisieren', es: 'seudonimizar-pdf', fr: 'pseudonymiser-pdf', it: 'pseudonimizzare-pdf', pt: 'pseudonimizar-pdf', nl: 'pdf-pseudonimiseren', ar: 'pseudonymize-pdf', lv: 'pseidonimizet-pdf', zh: 'pseudonymize-pdf' },
  'gdpr-pdf': { en: 'gdpr-pdf', de: 'dsgvo-pdf', es: 'rgpd-pdf', fr: 'rgpd-pdf', it: 'gdpr-pdf', pt: 'rgpd-pdf', nl: 'avg-pdf', ar: 'gdpr-pdf', lv: 'vdar-pdf', zh: 'gdpr-pdf' },
  'remove-names-from-pdf': { en: 'remove-names-from-pdf', de: 'namen-aus-pdf-entfernen', es: 'eliminar-nombres-pdf', fr: 'supprimer-noms-pdf', it: 'rimuovere-nomi-pdf', pt: 'remover-nomes-pdf', nl: 'namen-verwijderen-pdf', ar: 'remove-names-from-pdf', lv: 'nonemt-vardus-pdf', zh: 'remove-names-from-pdf' },
  'censor-pdf': { en: 'censor-pdf', de: 'pdf-zensieren', es: 'censurar-pdf', fr: 'censurer-pdf', it: 'censurare-pdf', pt: 'censurar-pdf', nl: 'pdf-censureren', ar: 'censor-pdf', lv: 'cenzet-pdf', zh: 'censor-pdf' },
  'black-out-pdf': { en: 'black-out-pdf', de: 'text-schwaerzen', es: 'ennegrecer-pdf', fr: 'noircir-pdf', it: 'annerire-pdf', pt: 'escurecer-pdf', nl: 'tekst-zwart-maken', ar: 'black-out-pdf', lv: 'aizmelnot-pdf', zh: 'black-out-pdf' },
  'hide-information-in-pdf': { en: 'hide-information-in-pdf', de: 'informationen-im-pdf-verbergen', es: 'ocultar-informacion-pdf', fr: 'masquer-informations-pdf', it: 'nascondere-informazioni-pdf', pt: 'ocultar-informacoes-pdf', nl: 'informatie-verbergen-pdf', ar: 'hide-information-in-pdf', lv: 'slept-informaciju-pdf', zh: 'hide-information-in-pdf' },
  'remove-personal-information-pdf': { en: 'remove-personal-information-pdf', de: 'persoenliche-daten-entfernen', es: 'eliminar-datos-personales-pdf', fr: 'supprimer-donnees-personnelles-pdf', it: 'rimuovere-dati-personali-pdf', pt: 'remover-dados-pessoais-pdf', nl: 'persoonsgegevens-verwijderen-pdf', ar: 'remove-personal-information-pdf', lv: 'nonemt-personas-datus-pdf', zh: 'remove-personal-information-pdf' },
  'document-redact': { en: 'redact-document', de: 'dokument-schwaerzen', es: 'censurar-documento', fr: 'caviarder-document', it: 'oscurare-documento', pt: 'ocultar-documento', nl: 'document-redigeren', ar: 'redact-document', lv: 'aizkrasot-dokumentu', zh: 'redact-document' },
};

export const pages: Record<string, PageDef> = Object.fromEntries(
  Object.entries(SLUGS).map(([key, slugs]) => {
    const kind: PageKind = key === 'home' ? 'home' : 'landing';
    const locales: PageDef['locales'] = {};
    for (const lang of Object.keys(slugs) as Lang[]) {
      const copy = kind === 'home' ? homeMeta[lang] : COPY[lang]?.[key];
      if (copy !== undefined) locales[lang] = { slug: slugs[lang]!, copy };
    }
    return [key, { kind, locales }];
  }),
);
