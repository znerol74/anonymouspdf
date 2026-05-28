import assert from 'node:assert/strict';
import { aggregateNerTokens, type NerToken } from '../src/tool/detect/ner';

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

// The exact shape transformers.js 3.x returns for the NER model: raw per-token
// BIO tags, no char offsets, only `word`. (Regression for the bug where names
// were detected by the model but silently dropped in post-processing.)
const TEXT =
  'Patient: Maria Gonzalez\nAccount manager: Thomas Berger\nEmail: x@y.com';

test('merges B-/I- person tokens into whole-name spans', () => {
  const tokens: NerToken[] = [
    { entity: 'B-PER', score: 0.9998, word: 'Maria' },
    { entity: 'I-PER', score: 0.9996, word: 'Gonzalez' },
    { entity: 'B-PER', score: 0.9998, word: 'Thomas' },
    { entity: 'I-PER', score: 0.9997, word: 'Berger' },
  ];
  const spans = aggregateNerTokens(tokens, TEXT);
  assert.equal(spans.length, 2);
  assert.equal(spans[0].type, 'PERSON');
  assert.equal(spans[0].text, 'Maria Gonzalez');
  assert.equal(spans[1].text, 'Thomas Berger');
  // offsets must index back into the source text
  assert.equal(TEXT.slice(spans[0].start, spans[0].end), 'Maria Gonzalez');
  assert.equal(TEXT.slice(spans[1].start, spans[1].end), 'Thomas Berger');
});

test('recovered offsets are monotonic for repeated surface forms', () => {
  const text = 'Berger met Berger';
  const tokens: NerToken[] = [
    { entity: 'B-PER', score: 0.99, word: 'Berger' },
    { entity: 'B-PER', score: 0.99, word: 'Berger' },
  ];
  const spans = aggregateNerTokens(tokens, text);
  assert.equal(spans.length, 2);
  assert.equal(spans[0].start, 0);
  assert.equal(spans[1].start, 11);
});

test('stitches wordpiece (##) continuations without a space', () => {
  const text = 'Contact Gonzalez today';
  const tokens: NerToken[] = [
    { entity: 'B-PER', score: 0.99, word: 'Gon' },
    { entity: 'I-PER', score: 0.99, word: '##za' },
    { entity: 'I-PER', score: 0.99, word: '##lez' },
  ];
  const spans = aggregateNerTokens(tokens, text);
  assert.equal(spans.length, 1);
  assert.equal(spans[0].text, 'Gonzalez');
});

test('maps LOC to ADRESSE and ORG to ORG', () => {
  const text = 'lives in Wien works at Acme';
  const tokens: NerToken[] = [
    { entity: 'B-LOC', score: 0.99, word: 'Wien' },
    { entity: 'B-ORG', score: 0.99, word: 'Acme' },
  ];
  const spans = aggregateNerTokens(tokens, text);
  assert.deepEqual(
    spans.map((s) => [s.type, s.text]),
    [
      ['ADRESSE', 'Wien'],
      ['ORG', 'Acme'],
    ],
  );
});

test('drops a group whose min token score is below threshold', () => {
  const text = 'maybe Bob here';
  const tokens: NerToken[] = [{ entity: 'B-PER', score: 0.4, word: 'Bob' }];
  assert.equal(aggregateNerTokens(tokens, text).length, 0);
});

test('also handles the aggregated entity_group + offsets shape', () => {
  const text = 'Hi Maria Gonzalez!';
  const tokens: NerToken[] = [
    { entity_group: 'PER', score: 0.99, word: 'Maria Gonzalez', start: 3, end: 17 },
  ];
  const spans = aggregateNerTokens(tokens, text);
  assert.equal(spans.length, 1);
  assert.equal(spans[0].text, 'Maria Gonzalez');
  assert.equal(spans[0].start, 3);
});

test('ignores O / non-entity tokens', () => {
  const text = 'just some words';
  const tokens: NerToken[] = [
    { entity: 'O', score: 0.99, word: 'just' },
    { entity: 'O', score: 0.99, word: 'words' },
  ];
  assert.equal(aggregateNerTokens(tokens, text).length, 0);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
