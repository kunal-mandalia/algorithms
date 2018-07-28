/**
 * Does the sum of two numbers exist in array?
 * Inspired by Google's example engineering question https://www.youtube.com/watch?v=XKu_SEDAykw
 * @param {Array} arr unsorted array of integers
 * @param {Number} sum
 * @returns {Boolean}
 */
function findSumUnsorted (arr, sum) {
  const complements = []
  for (let i=0; i<arr.length; i++) {
    const compliment = arr[i] > sum ? arr[i] - sum : sum - arr[i]
    if (complements.indexOf(compliment) !== -1) {
      return true
    }
    complements.push(compliment)
  }
  return false
}

module.exports = {
  findSumUnsorted
}

