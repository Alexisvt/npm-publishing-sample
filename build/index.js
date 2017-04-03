'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sensitiveWords = exports.sensitiveWords = function sensitiveWords() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return content.replace(new RegExp(words.join('|'), 'ig'), '***');
};