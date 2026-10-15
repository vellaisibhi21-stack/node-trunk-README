const test = require('node:test');
const assert = require('node:assert');
const { farewell } = require('../src/farewell');
test('feat_10 farewell says goodbye', () => { assert.strictEqual(farewell(' World '), 'Goodbye, World!'); });
