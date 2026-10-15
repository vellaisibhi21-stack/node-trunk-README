const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/greet');
test('greet says hello', () => { assert.strictEqual(greet('World'), 'Hello, World!'); });
test('greet accepts a greeting word', () => { assert.strictEqual(greet('World', 'Hi'), 'Hi, World!'); });
test('greet trims the name', () => { assert.strictEqual(greet('  World '), 'Hello, World!'); });
test('feat_11 greet accepts a punctuation mark', () => { assert.strictEqual(greet('World', 'Hi', '.'), 'Hi, World.'); });
