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
  es: {
    seoTitle: 'AnonymousPDF — Tachar y anonimizar PDF online, gratis y en el navegador',
    seoDescription:
      'Herramienta online gratuita para tachar y anonimizar archivos PDF. Detecta y elimina automáticamente correos, teléfonos, IBAN, identificadores y nombres — 100% en tu navegador. Los archivos nunca salen de tu dispositivo.',
    priceCurrency: 'EUR',
  },
  fr: {
    seoTitle: 'AnonymousPDF — Caviarder et anonymiser un PDF en ligne, gratuit dans le navigateur',
    seoDescription:
      'Outil en ligne gratuit pour caviarder et anonymiser des fichiers PDF. Détecte et supprime automatiquement e-mails, téléphones, IBAN, identifiants et noms — 100 % dans votre navigateur. Les fichiers ne quittent jamais votre appareil.',
    priceCurrency: 'EUR',
  },
  it: {
    seoTitle: 'AnonymousPDF — Oscurare e anonimizzare PDF online, gratis nel browser',
    seoDescription:
      'Strumento online gratuito per oscurare e anonimizzare file PDF. Rileva e rimuove automaticamente e-mail, telefoni, IBAN, identificativi e nomi — 100% nel browser. I file non lasciano mai il tuo dispositivo.',
    priceCurrency: 'EUR',
  },
  pt: {
    seoTitle: 'AnonymousPDF — Ocultar e anonimizar PDF online, grátis no navegador',
    seoDescription:
      'Ferramenta online gratuita para ocultar e anonimizar ficheiros PDF. Deteta e remove automaticamente e-mails, telefones, IBAN, identificadores e nomes — 100% no navegador. Os ficheiros nunca saem do seu dispositivo.',
    priceCurrency: 'EUR',
  },
  nl: {
    seoTitle: 'AnonymousPDF — PDF zwartlakken en anonimiseren online, gratis in de browser',
    seoDescription:
      'Gratis online tool om PDF-bestanden zwart te lakken en te anonimiseren. Detecteert en verwijdert automatisch e-mails, telefoons, IBANs, identificatienummers en namen — 100% in je browser. Bestanden verlaten nooit je apparaat.',
    priceCurrency: 'EUR',
  },
};
