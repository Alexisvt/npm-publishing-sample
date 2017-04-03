// because we name the file as "index.js" we can call it like that
const { sensitiveWords } = require('.');

test('replace words', () => {
  expect(sensitiveWords('hello alexis', ['alexis'])).toBe('hello ****');
});

test('replace multiple blacklisted words', () => {
  expect(sensitiveWords('hello alexis, alexis is awesome', ['alexis']))
    .toBe('hello ****, **** is awesome');
});

test('replace multiple different blacklisted words', () => {
  expect(sensitiveWords('hello alexis david, alexis david is awesome', ['alexis', 'david']))
    .toBe('hello **** ****, **** **** is awesome');
});