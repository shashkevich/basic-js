const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
    const columnCount = matrix.length;
    let count = 0;
    for (let i=0;i<columnCount;i++) {
      for (let j=0;j<matrix[i].length;j++) {
        if (matrix[i][j] === '^^') {
          count++;          
        }
      }
    }
    // console.log(count);
    return count;
  // remove line with error and write your code here
}

// countCats([
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
//   ]);

module.exports = {
  countCats
};
