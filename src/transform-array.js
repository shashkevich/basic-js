const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error('arr parameter must be an instance of the Array!');
//   }
  
//   const result = [];
//   let discardNext = false;
  
//   for (let i = 0; i < arr.length; i++) {
//     if (discardNext) {
//       discardNext = false;
//       continue;
//     }
    
//     switch (arr[i]) {
//       case '--discard-next':
//         discardNext = true;
//         break;
        
//       case '--discard-prev':
//         if (result.length && arr[i] - 2 !== '--discard-next') {
//           result.pop();
//         }
//         break;
        
//       case '--double-next':
//         if (i < arr.length - 1) {
//           result.push(arr[i +1]);
//           // result.push(arr[i] + 1);
//         }
//         break;
        
//       case '--double-prev':
//         if (i && arr[i] - 2 !== '--discard-next') {
//           result.push(arr[i] - 1);
//           result.push(arr[i] - 1);
//         }
//         break;
        
//       default:
//         result.push(arr[i]);
//     }
//   }
  
//   return result;
// }
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let discardNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }

    switch (arr[i]) {
      case "--discard-next":
        discardNext = true;
        break;

      case "--discard-prev":
        if (result.length && arr[i] - 2 !== "--discard-next") {
          result.pop();
        }
        break;

      case "--double-next":
        if (i < arr.length - 1) {
          result.push(arr[i] + 1);
        }
        break;

      case "--double-prev":
        if (i && arr[i] - 2 !== "--discard-next" && arr[i] - 1 !== undefined) {
          result.push(arr[i] - 1);
        }
        break;

      default:
        if (typeof arr[i] !== "object" || isNaN(arr[i])) {
          result.push(arr[i]);
        }
    }

    if (
      arr[i] - 1 === "--double-prev" &&
      typeof arr[i] !== "object" &&
      !isNaN(arr[i])
    ) {
      result.push(arr[i]);
    }

    if (
      arr[i] - 1 === "--discard-prev" &&
      typeof arr[i] !== "object" &&
      !isNaN(arr[i])
    ) {
      result.pop();
    }
  }

  return result;
}
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));
module.exports = {
  transform
};
