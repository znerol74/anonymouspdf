// Entity taxonomy for the in-browser detector. Tuned for an auto-redact flow
// with no per-item review gate, so precision is prioritized over recall: the
// 4+ digit catch-all and standalone dates are intentionally excluded, and
// CREDIT_CARD and IP are added for the general (non-DACH-only) audience.

export type EntityType =
  | 'SVNR'
  | 'IBAN'
  | 'CREDIT_CARD'
  | 'AKTENZEICHEN'
  | 'FN'
  | 'EZ'
  | 'KENNZEICHEN'
  | 'EMAIL'
  | 'URL'
  | 'IP'
  | 'TELEFON'
  | 'ADRESSE'
  | 'ORG'
  | 'PERSON';

export type DetectionSource = 'regex' | 'ner';

export interface DetectedSpan {
  type: EntityType;
  /** UTF-16 offset into the text the span was detected in. */
  start: number;
  end: number;
  text: string;
  source: DetectionSource;
  score?: number;
}

/** Higher wins on overlap. */
export const PRECEDENCE: Record<EntityType, number> = {
  SVNR: 100,
  IBAN: 95,
  CREDIT_CARD: 93,
  AKTENZEICHEN: 90,
  FN: 85,
  EZ: 85,
  KENNZEICHEN: 80,
  EMAIL: 75,
  URL: 70,
  IP: 68,
  TELEFON: 65,
  ADRESSE: 50,
  ORG: 40,
  PERSON: 35,
};

/** Replacement labels used in the "copy text" output. */
export const TYPE_LABELS: Record<'en' | 'de', Record<EntityType, string>> = {
  en: {
    PERSON: '[NAME]',
    ORG: '[ORGANISATION]',
    ADRESSE: '[ADDRESS]',
    EMAIL: '[EMAIL]',
    TELEFON: '[PHONE]',
    IBAN: '[IBAN]',
    CREDIT_CARD: '[CARD]',
    SVNR: '[SSN]',
    AKTENZEICHEN: '[CASE-NO]',
    FN: '[COMPANY-NO]',
    EZ: '[LAND-REG]',
    KENNZEICHEN: '[PLATE]',
    URL: '[URL]',
    IP: '[IP]',
  },
  de: {
    PERSON: '[NAME]',
    ORG: '[ORGANISATION]',
    ADRESSE: '[ADRESSE]',
    EMAIL: '[E-MAIL]',
    TELEFON: '[TELEFON]',
    IBAN: '[IBAN]',
    CREDIT_CARD: '[KARTE]',
    SVNR: '[SVNR]',
    AKTENZEICHEN: '[AKTENZEICHEN]',
    FN: '[FN]',
    EZ: '[EZ]',
    KENNZEICHEN: '[KENNZEICHEN]',
    URL: '[URL]',
    IP: '[IP]',
  },
};
