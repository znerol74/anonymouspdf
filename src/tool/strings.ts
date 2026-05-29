import type { EntityType } from './types';
import type { Lang } from '../i18n/site';

export type { Lang };

export interface ToolStrings {
  drop: string;
  choose: string;
  privacy: string;
  reading: string;
  extracting: string;
  modelLoading: string;
  modelNote: string;
  detecting: string;
  rendering: string;
  doneTitle: string;
  found: string;
  nothing: string;
  downloadPdf: string;
  downloadText: string;
  copyText: string;
  copied: string;
  again: string;
  error: string;
  notPdf: string;
  pages: string;
  typeNames: Record<EntityType, string>;
}

export const toolStrings: Partial<Record<Lang, ToolStrings>> = {
  en: {
    drop: 'Drop a PDF here, or click to choose a file',
    choose: 'Choose PDF',
    privacy: 'Your file is processed in your browser and is never uploaded.',
    reading: 'Reading file…',
    extracting: 'Reading the document…',
    modelLoading: 'Processing…',
    modelNote: 'The first run may take a moment — everything stays in your browser.',
    detecting: 'Finding sensitive data…',
    rendering: 'Applying redactions…',
    doneTitle: 'Done — data replaced',
    found: 'items replaced',
    nothing:
      'No sensitive data was detected automatically. Review the document yourself before sharing it.',
    downloadPdf: 'Download PDF',
    downloadText: 'Download text',
    copyText: 'Copy text',
    copied: 'Copied!',
    again: 'Redact another PDF',
    error: 'Something went wrong while processing this PDF. Please try another file.',
    notPdf: 'Please choose a PDF file.',
    pages: 'pages',
    typeNames: {
      PERSON: 'Names',
      ORG: 'Organisations',
      ADRESSE: 'Addresses',
      EMAIL: 'Emails',
      TELEFON: 'Phone numbers',
      IBAN: 'IBANs',
      CREDIT_CARD: 'Card numbers',
      SVNR: 'Social-security numbers',
      AKTENZEICHEN: 'Case numbers',
      FN: 'Company numbers',
      EZ: 'Land-register numbers',
      KENNZEICHEN: 'License plates',
      URL: 'URLs',
      IP: 'IP addresses',
      DATE: 'Dates',
    },
  },
  de: {
    drop: 'PDF hierher ziehen oder klicken, um eine Datei zu wählen',
    choose: 'PDF auswählen',
    privacy: 'Ihre Datei wird im Browser verarbeitet und niemals hochgeladen.',
    reading: 'Datei wird gelesen…',
    extracting: 'Dokument wird gelesen…',
    modelLoading: 'Wird verarbeitet…',
    modelNote: 'Der erste Durchlauf kann einen Moment dauern — alles bleibt in Ihrem Browser.',
    detecting: 'Sensible Daten werden gesucht…',
    rendering: 'Schwärzungen werden angewendet…',
    doneTitle: 'Fertig — Daten ersetzt',
    found: 'Einträge ersetzt',
    nothing:
      'Es wurden automatisch keine sensiblen Daten erkannt. Bitte prüfen Sie das Dokument selbst, bevor Sie es weitergeben.',
    downloadPdf: 'PDF herunterladen',
    downloadText: 'Text herunterladen',
    copyText: 'Text kopieren',
    copied: 'Kopiert!',
    again: 'Weiteres PDF schwärzen',
    error: 'Bei der Verarbeitung ist ein Fehler aufgetreten. Bitte versuchen Sie eine andere Datei.',
    notPdf: 'Bitte wählen Sie eine PDF-Datei.',
    pages: 'Seiten',
    typeNames: {
      PERSON: 'Namen',
      ORG: 'Organisationen',
      ADRESSE: 'Adressen',
      EMAIL: 'E-Mail-Adressen',
      TELEFON: 'Telefonnummern',
      IBAN: 'IBANs',
      CREDIT_CARD: 'Kartennummern',
      SVNR: 'SV-Nummern',
      AKTENZEICHEN: 'Aktenzeichen',
      FN: 'Firmenbuchnummern',
      EZ: 'Einlagezahlen',
      KENNZEICHEN: 'Kennzeichen',
      URL: 'URLs',
      IP: 'IP-Adressen',
      DATE: 'Datumsangaben',
    },
  },
};
