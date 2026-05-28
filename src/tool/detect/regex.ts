// Deterministic pattern recognizers for AT/DE-focused and general PII.
// Tuned for an anonymize flow (entities are replaced with pseudonyms, not
// hidden): precision is still favored, but dates ARE detected (numeric, ISO,
// month-name and standalone year) since the product now masks them too.
// Still no broad 4+ digit catch-all; credit cards are Luhn-checked.

import type { DetectedSpan, EntityType } from '../types';

// --- Allowlists / stopwords (post-filters) -------------------------------

const AT_KFZ_CODES = new Set([
  'W', 'B', 'K', 'L', 'S', 'I', 'G',
  'WD', 'WK',
  'E', 'EU', 'MA', 'OP', 'OW', 'JE', 'GS', 'ND',
  'KL', 'VI', 'VL', 'VK', 'SP', 'SV', 'FE', 'HE', 'WO',
  'AM', 'BN', 'BL', 'GD', 'GF', 'HL', 'HO', 'KO', 'KR', 'KS', 'LF',
  'ME', 'MD', 'MI', 'NK', 'PL', 'SB', 'TU', 'KG', 'WB', 'WT', 'WY',
  'WN', 'WU', 'ZT', 'SW',
  'BR', 'EF', 'FR', 'GM', 'GR', 'KI', 'LL', 'PE', 'RI', 'RO', 'SD',
  'SE', 'SR', 'UU', 'VB', 'WE', 'WL',
  'HA', 'JO', 'SL', 'TA', 'ZE',
  'BA', 'BM', 'DL', 'FB', 'FF', 'GU', 'HB', 'HF', 'JU', 'KF', 'LB',
  'LE', 'LI', 'LN', 'MT', 'MU', 'MZ', 'RA', 'SO', 'VO', 'WZ',
  'IL', 'IM', 'KB', 'KU', 'LA', 'LZ', 'RE', 'SZ',
  'BZ', 'DO', 'FK',
]);

const DE_KFZ_CODES = new Set([
  'B', 'HH', 'M', 'K', 'F', 'S', 'D', 'DO', 'E', 'HB', 'H', 'N',
  'L', 'DD', 'MA', 'KA', 'WI', 'BO', 'BI', 'MS', 'A', 'MG', 'AC',
  'KR', 'MD', 'FR', 'HL', 'OB', 'HA', 'EF', 'KS', 'SB', 'HRO',
  'MZ', 'KI', 'HD', 'SG', 'P', 'C', 'OS', 'BS', 'UL', 'LU', 'OL',
  'PB', 'DA', 'FD', 'GE', 'JE', 'PF', 'RE', 'RT', 'SI', 'TR',
  'BW', 'BY', 'BE', 'BB', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL',
  'SN', 'ST', 'SH', 'TH',
  'AB', 'AN', 'BA', 'BT', 'CB', 'CO', 'CW', 'DH', 'DN', 'EL', 'EM',
  'EN', 'ES', 'FB', 'FN', 'FT', 'FU', 'GG', 'GI', 'GP', 'GR', 'HF',
  'HG', 'HM', 'HN', 'HO', 'HR', 'HX', 'IN', 'KB', 'KG', 'KH', 'KL',
  'KO', 'KU', 'KÜ', 'LB', 'LD', 'LG', 'LI', 'LM', 'LÖ', 'MI', 'MK',
  'MN', 'MO', 'MR', 'MY', 'NB', 'NM', 'NU', 'OD', 'OG', 'OH', 'PA',
  'PI', 'PR', 'RA', 'RD', 'RG', 'RH', 'RV', 'RW', 'SC', 'SG', 'SO',
  'SP', 'SR', 'ST', 'SU', 'SW', 'SZ', 'TF', 'TÖ', 'TS', 'TÜ', 'VB',
  'VR', 'VS', 'WL', 'WM', 'WT', 'WW', 'ZW',
]);

const CURRENCY_CODES = new Set([
  'EUR', 'USD', 'CHF', 'GBP', 'JPY', 'CAD', 'AUD', 'PLN', 'CZK', 'HUF',
]);

const PLZ_FAKE_CITY_STOPWORDS = new Set([
  'Verwendungszweck', 'Beschreibung', 'Empfänger', 'Auftraggeber',
  'Absender', 'Rechnungsempfänger', 'Lieferanschrift', 'Geschäftsführer',
  'Vertragspartner', 'Sachbearbeiter', 'Ansprechpartner', 'Mitarbeiter',
  'Datum', 'Rechnungsdatum', 'Lieferdatum', 'Bestelldatum',
  'Rechnungsnummer', 'Bestellnummer', 'Auftragsnummer', 'Kundennummer',
  'Artikelnummer', 'Belegnummer', 'Vorgangsnummer', 'Aktenzeichen',
  'Zwischensumme', 'Umsatzsteuer', 'Mehrwertsteuer', 'Rechnungsbetrag',
  'Gesamtpreis', 'Einzelpreis', 'Nettobetrag', 'Bruttobetrag',
  'Steuersatz', 'Skonto', 'Rabatt', 'Versandkosten',
  'Sachverhalt', 'Zusammenfassung', 'Tatbestand', 'Anhang', 'Beilage',
  'Inhalt', 'Inhaltsverzeichnis', 'Vorwort', 'Einleitung', 'Schluss',
  'Anlage', 'Anlagen', 'Dokument', 'Dokumentart',
  'Klagende', 'Beklagte', 'Kläger', 'Beklagter', 'Verfasser',
  'Zeuge', 'Zeugin', 'Anwalt', 'Anwältin',
]);

const PLZ_ADDRESS_PREFIX_RE =
  /(?:\n|[,;]\s*|\b(?:in|an|wohnhaft|wohnsitz|sitz|anschrift|adresse|postanschrift|lieferanschrift|geschäftsanschrift|wohnort)[\s:]+)\s*$/i;

const OGH_GESCHAEFTSZAHL_RE = /^(?:1[0-5]|[1-9])\s+(?:Osa|Os|Ob)\s+\d{1,5}\/\d{2,4}[a-z]?$/;

// --- Patterns ------------------------------------------------------------

const SVNR_RE = /\b\d{4}[\s\-./]?(?:0[1-9]|[12]\d|3[01])(?:0[1-9]|1[0-2])\d{2}\b/g;
const IBAN_RE = /\b[A-Z]{2}\d{2}(?:\s?[A-Z0-9]{4})+(?:\s?[A-Z0-9]{1,3})?\b/g;
const EMAIL_RE = /\b[a-z0-9][a-z0-9._%+\-]{0,63}@[a-z0-9.\-]+\.[a-z]{2,24}\b/gi;
const URL_RE =
  /(?:https?:\/\/[^\s<>"'[\]{}]+|\bwww\.[a-z0-9\-]+\.[a-z]{2,}(?:\/[^\s<>"'[\]{}]*)?)/gi;
const TELEFON_RE =
  /(?:\+(?:43|49)\s?[\d\s/\-()]{6,16}\d|00(?:43|49)\s?[\d\s/\-()]{6,16}\d|\b0[1-9][\d\s/\-()]{6,16}\d)/g;
const AKTENZEICHEN_RE =
  /\b(?:(?:\d{1,3}\s+)?(?:Cga?|C|R|Hg|Ob|Os|Hv|Vr|Nc|Ns|Sa?|Bs|Bl|G|E|Fr|U|Fam|GZ)\s+\d{1,5}\/\d{2,4}[a-z]?|Ra\s+\d{4}\/\d{2}\/\d{4})\b/g;
const FN_RE = /\bFN\s?\d{1,6}[a-z]?\b/g;
const EZ_RE = /\bEZ\s+\d+(?:\s+KG\s+\d+)?(?:\s+[A-ZÄÖÜ][a-zäöüß]+)*/gi;
const KENNZEICHEN_RE = /\b[A-Z]{1,3}[\s-](?:[A-Z]{1,2}\s)?\d{1,5}(?:\s?[A-Z]{1,3})?\b/g;
const PLZ_ADRESSE_RE = /\b\d{4,5}\s+[A-ZÄÖÜ][a-zäöüß]+(?:\s+[A-ZÄÖÜ][a-zäöüß]+){0,3}\b/g;
const STRASSE_RE =
  /\b(?:(?:Wiedner|Wiener|Obere|Untere|Alte|Neue|Hohe|Tiefe|Linke|Rechte|Innere|Äußere|Große|Kleine|Lange|Kurze|Erste|Zweite|Dritte|Vierte)\s+)?[A-ZÄÖÜ][a-zäöüß-]+(?:(?:straße|gasse|platz|weg|allee|ring|hof|markt|ufer|zeile|brücke|stiege|kai|park|bach|tal|berg)|\s+(?:Straße|Gasse|Platz|Weg|Allee|Ring|Hof|Markt|Ufer|Zeile|Brücke|Stiege|Kai|Park|Bach|Tal|Berg|Lände|Hauptstraße))\s+\d{1,4}[a-z]?(?:\s?[/-]\s?\d{1,4}[a-z]?)?/g;
const CREDIT_CARD_RE = /\b\d{4}(?:[\s-]?\d{4}){2}(?:[\s-]?\d{1,4})?\b/g;
const IPV4_RE =
  /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g;

const MONTH_NAMES =
  'January|February|March|April|May|June|July|August|September|October|November|December|' +
  'Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec|' +
  'Jänner|Januar|Februar|März|Mai|Juni|Juli|Oktober|Dezember';
// 31.12.2024 · 31/12/24 · 12-31-2024 (day/month order not enforced)
const DATE_NUMERIC_RE = /\b(?:0?[1-9]|[12]\d|3[01])[.\/-](?:0?[1-9]|1[0-2])[.\/-]\d{2,4}\b/g;
// ISO 2024-12-31
const DATE_ISO_RE = /\b\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])\b/g;
// 15. März 2024 · 15 March 2024 · March 2024 · March 15, 2024
const DATE_TEXT_RE = new RegExp(
  `\\b(?:\\d{1,2}\\.?\\s+)?(?:${MONTH_NAMES})\\.?\\s+\\d{4}\\b|` +
    `\\b(?:${MONTH_NAMES})\\s+\\d{1,2}(?:st|nd|rd|th)?,?\\s+\\d{4}\\b`,
  'gi',
);
// Standalone calendar year (accepts some false positives by design).
const DATE_YEAR_RE = /\b(?:19|20)\d{2}\b/g;

// --- Post-filter helpers -------------------------------------------------

function digitsOnly(s: string): string {
  return s.replace(/\D/g, '');
}

function luhnValid(digits: string): boolean {
  let sum = 0;
  let dbl = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits.charCodeAt(i) - 48;
    if (dbl) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    dbl = !dbl;
  }
  return sum % 10 === 0;
}

function svnrSanity(m: string): boolean {
  return digitsOnly(m).length === 10;
}

function ibanCheck(m: string): boolean {
  const alnum = (m.match(/[A-Za-z0-9]/g) ?? []).length;
  return alnum >= 15 && alnum <= 34;
}

function creditCardCheck(m: string): boolean {
  const d = digitsOnly(m);
  return d.length >= 13 && d.length <= 19 && luhnValid(d);
}

function aktenzeichenNotOgh(m: string): boolean {
  return !OGH_GESCHAEFTSZAHL_RE.test(m);
}

function kennzeichenFilter(m: string): boolean {
  let prefix = '';
  for (const ch of m) {
    if ((ch >= 'A' && ch <= 'Z') || ch === 'Ä' || ch === 'Ö' || ch === 'Ü') prefix += ch;
    else break;
  }
  if (CURRENCY_CODES.has(prefix)) return false;
  return AT_KFZ_CODES.has(prefix) || DE_KFZ_CODES.has(prefix);
}

function plzInAddressContext(text: string, start: number): boolean {
  const after = text.slice(start);
  const sp = after.search(/\s/);
  if (sp < 0) return false;
  const rest = after.slice(sp).trim();
  const firstWord = rest.split(/\s+/)[0] ?? '';
  if (PLZ_FAKE_CITY_STOPWORDS.has(firstWord)) return false;
  if (start === 0) return true;
  const prefix = text.slice(Math.max(0, start - 30), start);
  return PLZ_ADDRESS_PREFIX_RE.test(prefix);
}

// --- Layer composition ---------------------------------------------------

type Filter = (match: string, text: string, start: number, end: number) => boolean;

interface PatternDef {
  type: EntityType;
  re: RegExp;
  filter?: Filter;
}

const PATTERNS: PatternDef[] = [
  { type: 'SVNR', re: SVNR_RE, filter: (m) => svnrSanity(m) },
  { type: 'IBAN', re: IBAN_RE, filter: (m) => ibanCheck(m) },
  { type: 'CREDIT_CARD', re: CREDIT_CARD_RE, filter: (m) => creditCardCheck(m) },
  { type: 'EMAIL', re: EMAIL_RE },
  { type: 'URL', re: URL_RE },
  { type: 'IP', re: IPV4_RE },
  { type: 'TELEFON', re: TELEFON_RE },
  { type: 'AKTENZEICHEN', re: AKTENZEICHEN_RE, filter: (m) => aktenzeichenNotOgh(m) },
  { type: 'FN', re: FN_RE },
  { type: 'EZ', re: EZ_RE },
  { type: 'ADRESSE', re: PLZ_ADRESSE_RE, filter: (_m, text, start) => plzInAddressContext(text, start) },
  { type: 'ADRESSE', re: STRASSE_RE },
  { type: 'KENNZEICHEN', re: KENNZEICHEN_RE, filter: (m) => kennzeichenFilter(m) },
  { type: 'DATE', re: DATE_NUMERIC_RE },
  { type: 'DATE', re: DATE_ISO_RE },
  { type: 'DATE', re: DATE_TEXT_RE },
  { type: 'DATE', re: DATE_YEAR_RE },
];

export function runRegexLayer(text: string): DetectedSpan[] {
  const out: DetectedSpan[] = [];
  for (const { type, re, filter } of PATTERNS) {
    re.lastIndex = 0;
    for (const m of text.matchAll(re)) {
      const start = m.index ?? 0;
      const matched = m[0];
      const end = start + matched.length;
      if (filter && !filter(matched, text, start, end)) continue;
      out.push({ type, start, end, text: matched, source: 'regex', score: 1 });
    }
  }
  return out;
}
