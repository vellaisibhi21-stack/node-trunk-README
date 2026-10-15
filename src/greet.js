function greet(name, word = 'Hello', mark = '!') {
  return `${word}, ${String(name).trim()}${mark}`;
}
module.exports = { greet };
