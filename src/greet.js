function greet(name, word = 'Hello') {
  return `${word}, ${String(name).trim()}!`;
}
module.exports = { greet };
