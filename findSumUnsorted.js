const assert = require('assert');

/**
 * Does the sum of two numbers exist in array?
 * Inspired by Google's example engineering question https://www.youtube.com/watch?v=XKu_SEDAykw
 * @param {Array} arr unsorted array of integers
 * @param {Number} sum
 * @returns {Boolean}
 */
function findSumUnsorted (arr, sum) {
  const complements = [];
  for (let i=0; i<arr.length; i++) {
    const compliment = arr[i] > sum ? arr[i] - sum : sum - arr[i];
    if (complements.indexOf(compliment) !== -1) {
      return true;
      break;
    }
    complements.push(compliment);
  }
  return false;
}

function runTests () {
  const cases = [
    {input: {arr: [1,3,2,9], sum: 8}, output: false},
    {input: {arr: [1,4,2,4], sum: 8}, output: true},
  ]

  cases.forEach((c, i) => {
    const result = findSumUnsorted(c.input.arr, c.input.sum);
    assert(result === c.output, `Test ${i} failed. expected findSumUnsorted(${JSON.stringify(c.input)}) === ${c.output} but received ${result}`);
  })
}

runTests();
