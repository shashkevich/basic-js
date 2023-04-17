const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s1Chars = s1.split('');
  const s2Chars = s2.split('');
  s1Chars.forEach(char => {
    if (s2Chars.includes(char)) {
      count++;
      s2Chars.splice(s2Chars.indexOf(char), 1);
    }
  });
  return count;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
