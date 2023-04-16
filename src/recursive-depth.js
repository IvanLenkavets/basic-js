const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr) == false) {
      return 0;
    }

    let depth = 1;
    let maxValue = 0;

    for (let i = 0; i < arr.length; i++) {
      maxValue = Math.max(maxValue, this.calculateDepth(arr[i]));
    }

    return depth + maxValue;
  }
}

module.exports = {
  DepthCalculator
};
