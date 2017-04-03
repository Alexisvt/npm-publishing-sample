'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replace words', function () {
  expect((0, _2.default)('hello alexis', ['alexis'])).toBe('hello ***');
}); // because we name the file as "index.js" we can call it like that


test('replace multiple blacklisted words', function () {
  expect((0, _2.default)('hello alexis, alexis is awesome', ['alexis'])).toBe('hello ***, *** is awesome');
});