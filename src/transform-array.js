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
function transform(arr) {
  const transformedArr = [];

  if (Array.isArray(arr) == false){
    throw new Error('arr parameter must be an instance of the Array!');
  }
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const prev = transformedArr[transformedArr.length - 1];
    const next = arr[i + 1];

    if (current == "--discard-next") {
      i++;
    } else if (current == "--discard-prev") {
      if (transformedArr.length > 0 && prev !== undefined) {
        transformedArr.pop();
      }
    } else if (current == "--double-next") {
      if (next !== undefined) {
        transformedArr.push(next);
      }
    } else if (current == "--double-prev") {
      if (transformedArr.length > 0 && prev !== undefined) {
        transformedArr.push(prev);
      }
    } else {
      transformedArr.push(current);
    }
  }

  return transformedArr;
}

module.exports = {
  transform
};
