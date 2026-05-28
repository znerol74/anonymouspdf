import assert from 'node:assert/strict';
import { buildPseudonyms, applyPseudonyms, pseudonymFor } from '../src/tool/anonymize';
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

const span = (type: EntityType, start: number, end: number, text: string): DetectedSpan => ({
  type,
  start,
  end,
  text,
  source: 'ner',
});

test('same value gets the same number across occurrences', () => {
  const text = 'John Smith called. Later John Smith left.';
  const spans = [span('PERSON', 0, 10, 'John Smith'), span('PERSON', 25, 35, 'John Smith')];
  const map = buildPseudonyms([spans]);
  assert.equal(pseudonymFor(spans[0], map), 'Person_1');
  assert.equal(pseudonymFor(spans[1], map), 'Person_1');
  assert.equal(applyPseudonyms(text, spans, map), 'Person_1 called. Later Person_1 left.');
});

test('per-type counters increment by first appearance', () => {
  const spans = [span('PERSON', 0, 1, 'A'), span('ORG', 2, 3, 'B'), span('PERSON', 4, 5, 'C')];
  const map = buildPseudonyms([spans]);
  assert.equal(applyPseudonyms('A B C', spans, map), 'Person_1 ORG_1 Person_2');
});

test('numbering stays consistent across pages', () => {
  const p1 = [span('PERSON', 0, 5, 'Alice')];
  const p2 = [span('PERSON', 0, 3, 'Bob'), span('PERSON', 8, 13, 'Alice')];
  const map = buildPseudonyms([p1, p2]);
  assert.equal(pseudonymFor(p1[0], map), 'Person_1');
  assert.equal(pseudonymFor(p2[0], map), 'Person_2');
  assert.equal(pseudonymFor(p2[1], map), 'Person_1');
});

test('value matching is case- and whitespace-insensitive', () => {
  const spans = [span('PERSON', 0, 5, 'ALICE'), span('PERSON', 6, 11, ' alice ')];
  const map = buildPseudonyms([spans]);
  assert.equal(pseudonymFor(spans[0], map), 'Person_1');
  assert.equal(pseudonymFor(spans[1], map), 'Person_1');
});

test('dates use the Date base label', () => {
  const spans = [span('DATE', 0, 10, '15.03.2024')];
  const map = buildPseudonyms([spans]);
  assert.equal(pseudonymFor(spans[0], map), 'Date_1');
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
