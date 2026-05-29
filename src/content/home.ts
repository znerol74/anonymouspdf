import type { Lang } from '../i18n/site';
import type { HomeMeta } from './landing/types';

// Per-locale SEO metadata for the homepage. The visible homepage body comes from
// the `ui` strings via HomeContent.astro; this only drives <title>, description
// and the WebApplication JSON-LD.
export const homeMeta: Partial<Record<Lang, HomeMeta>> = {
  en: {
    seoTitle: 'AnonymousPDF — Redact & Anonymize PDF Online, Free & In-Browser',
    seoDescription:
      'Free online tool to redact and anonymize PDF files. Automatically detects and removes emails, phone numbers, IBANs, IDs and names — 100% in your browser. Files never leave your device.',
    priceCurrency: 'USD',
  },
  de: {
    seoTitle: 'AnonymousPDF — PDF schwärzen & anonymisieren, kostenlos im Browser',
    seoDescription:
      'Kostenloses Online-Tool zum Schwärzen und Anonymisieren von PDF-Dateien. Erkennt und entfernt automatisch E-Mails, Telefonnummern, IBANs, Aktenzeichen und Namen — 100% im Browser. Dateien verlassen niemals Ihr Gerät.',
    priceCurrency: 'EUR',
  },
};
