const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/greet');
test('greet says hello', () => { assert.strictEqual(greet('World'), 'Hello, World!'); });
