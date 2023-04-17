const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    // console.log(count);
    // console.log(count);
    if (str[i] === str[i +1]) {
      count++;
      encoded = str[i];
      // console.log(count);
    } 
    
  }
  encoded += count + encoded;
  return encoded;
}
console.log(encodeLine('aaaatttt'));
encodeLine('aaaatttt')
module.exports = {
  encodeLine
};
