/**
 * Does the sum of two numbers exist in array?
 * Inspired by Google's example engineering question https://www.youtube.com/watch?v=XKu_SEDAykw
 * @param {Array} arr of integers sorted ascendingly
 * @param {Number} sum
 * @returns {Boolean}
 */
function findSum (arr, sum) {
  let found = false

  function search (leftIndex, rightIndex, cb) {
    const searchSum = arr[leftIndex] + arr[rightIndex]
    if (searchSum === sum) {
      found = true
      return true
    }
    if (leftIndex === rightIndex) {
      found = false
      return false
    }
    if (searchSum > sum) {
      search(leftIndex, rightIndex - 1, cb)
    } else {
      search(leftIndex + 1, rightIndex, cb)
    }
  }

  search(0, arr.length - 1)
  return found
}

module.exports = {
  findSum
}