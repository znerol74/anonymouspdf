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
  | 'PERSON'
  | 'DATE';

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
  DATE: 20,
};

/**
 * Base name for each type's pseudonym. The anonymizer appends a per-type,
 * per-document counter (e.g. `Person_1`, `ORG_2`), reusing the same number for
 * repeated occurrences of the same value. Language-neutral by design.
 */
export const PSEUDONYM_BASE: Record<EntityType, string> = {
  PERSON: 'Person',
  ORG: 'ORG',
  ADRESSE: 'Address',
  EMAIL: 'Email',
  TELEFON: 'Phone',
  IBAN: 'IBAN',
  CREDIT_CARD: 'Card',
  SVNR: 'SSN',
  AKTENZEICHEN: 'Case',
  FN: 'CompanyNo',
  EZ: 'LandReg',
  KENNZEICHEN: 'Plate',
  URL: 'URL',
  IP: 'IP',
  DATE: 'Date',
};
