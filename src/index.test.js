// because we name the file as "index.js" we can call it like that
import sensitiveWords from '.';

test('replace words', () => {
  expect(sensitiveWords('hello alexis', ['alexis'])).toBe('hello ***');
});

test('replace multiple blacklisted words', () => {
  expect(sensitiveWords('hello alexis, alexis is awesome', ['alexis']))
    .toBe('hello ***, *** is awesome');
});