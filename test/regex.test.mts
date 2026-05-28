import assert from 'node:assert/strict';
import { runRegexLayer, resolveOverlaps } from '../src/tool/detect/index';
import type { DetectedSpan, EntityType } from '../src/tool/types';

let passed = 0;
let failed = 0;
function test(name: string, fn: () => void) {
  try {
    fn();
    passed++;
  } catch (err) {
    failed++;
    console.error(`✗ ${name}`);
    console.error(`  ${(err as Error).message}`);
  }
}

const of = (text: string, type: EntityType): DetectedSpan[] =>
  runRegexLayer(text).filter((s) => s.type === type);

// --- SVNR ---
test('svnr basic', () => {
  const hits = of('SVNR: 1234 010180 wurde gemeldet.', 'SVNR');
  assert.equal(hits.length, 1);
  assert.equal(hits[0].text, '1234 010180');
});
test('svnr no separator', () => {
  assert.equal(of('die Nummer 1234010180 lautet', 'SVNR').length, 1);
});
test('svnr rejects invalid month', () => {
  assert.equal(of('1234 011380', 'SVNR').length, 0);
});

// --- IBAN ---
test('iban at', () => {
  assert.equal(of('Konto AT61 1904 3002 3457 3201 lautet auf', 'IBAN').length, 1);
});

// --- EMAIL ---
test('email basic two', () => {
  assert.equal(of('an kanzlei@example.at oder mueller@law.de', 'EMAIL').length, 2);
});
test('email umlaut offset is utf16-consistent', () => {
  const hits = of('Müller schreibt an info@example.at', 'EMAIL');
  assert.equal(hits.length, 1);
  assert.equal(hits[0].start, 19);
});

// --- AKTENZEICHEN + OGH negative filter ---
test('aktenzeichen classic', () => {
  const hits = of('Im Verfahren 12 Cg 34/56 wurde', 'AKTENZEICHEN');
  assert.equal(hits.length, 1);
  assert.ok(hits[0].text.includes('Cg 34/56'));
});
test('ogh civil is skipped', () => {
  assert.equal(of('GZ 5 Ob 78/90s vom Obersten Gerichtshof', 'AKTENZEICHEN').length, 0);
});
test('ogh criminal os skipped', () => {
  assert.equal(of('OGH 4 Os 5/19', 'AKTENZEICHEN').length, 0);
});
test('non-ogh ob still redacted', () => {
  assert.ok(of('Akt 16 Ob 12/24 vor dem Landesgericht', 'AKTENZEICHEN').length >= 1);
});

// --- FN / EZ / URL ---
test('fn number', () => {
  const hits = of('eingetragen unter FN 123456a beim Handelsgericht', 'FN');
  assert.equal(hits.length, 1);
  assert.equal(hits[0].text, 'FN 123456a');
});
test('ez number', () => {
  const hits = of('Liegenschaft EZ 1234 KG 56789 Wien Innere Stadt', 'EZ');
  assert.ok(hits.length >= 1);
  assert.ok(hits[0].text.startsWith('EZ 1234'));
});
test('url https', () => {
  assert.equal(of('siehe https://www.ris.bka.gv.at/Justiz/', 'URL').length, 1);
});

// --- TELEFON ---
test('telefon at mobile two', () => {
  assert.equal(of('Tel.: +43 660 1234567 oder 0664 9876543', 'TELEFON').length, 2);
});
test('telefon rejects dotted date', () => {
  assert.equal(of('Verzug seit 01.08.2024 mit Folgen.', 'TELEFON').length, 0);
});

// --- KENNZEICHEN ---
test('kennzeichen rejects currency prefix', () => {
  assert.equal(of('Schaden EUR 45000 wurde erstattet', 'KENNZEICHEN').length, 0);
});
test('kennzeichen real plate', () => {
  assert.equal(of('Das Fahrzeug W 12345 AB wurde beschädigt.', 'KENNZEICHEN').length, 1);
});

// --- ADRESSE ---
test('plz address basic', () => {
  const hits = of('Wohnhaft 1010 Wien, Stephansplatz.', 'ADRESSE');
  assert.ok(hits.some((h) => h.text.startsWith('1010 Wien')));
});
test('strasse glued suffix', () => {
  const hits = of('wohnhaft Marxergasse 1a, 1030 Wien.', 'ADRESSE');
  assert.ok(hits.some((h) => h.text.includes('Marxergasse') && h.text.includes('1a')));
});

// --- CREDIT_CARD (Luhn) ---
test('credit card valid visa', () => {
  assert.equal(of('Karte 4111 1111 1111 1111 belastet', 'CREDIT_CARD').length, 1);
});
test('credit card rejects non-luhn', () => {
  assert.equal(of('Nr 1234 5678 9012 3456 ungültig', 'CREDIT_CARD').length, 0);
});

// --- IPv4 ---
test('ipv4 valid', () => {
  assert.equal(of('Server 192.168.0.1 erreichbar', 'IP').length, 1);
});
test('ipv4 rejects out-of-range', () => {
  assert.equal(of('Wert 999.1.1.1 ungültig', 'IP').length, 0);
});

// --- Overlap resolution ---
test('higher precedence wins overlap', () => {
  const spans: DetectedSpan[] = [
    { type: 'PERSON', start: 0, end: 20, text: 'x', source: 'ner', score: 0.9 },
    { type: 'EMAIL', start: 5, end: 18, text: 'y', source: 'regex', score: 1 },
  ];
  const resolved = resolveOverlaps(spans);
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].type, 'EMAIL');
});
test('non-overlapping spans both kept and sorted', () => {
  const spans: DetectedSpan[] = [
    { type: 'EMAIL', start: 30, end: 40, text: 'b', source: 'regex' },
    { type: 'PERSON', start: 0, end: 10, text: 'a', source: 'ner' },
  ];
  const resolved = resolveOverlaps(spans);
  assert.equal(resolved.length, 2);
  assert.equal(resolved[0].start, 0);
  assert.equal(resolved[1].start, 30);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
