function binarySearchRecursive(arr, search, left, right) {
  if (left > right) return false

  const mid = Math.floor(left + (right - left) / 2)
  if (arr[mid] === search) return true
  if (arr[mid] < search) {
    return binarySearchRecursive(arr, search, left, mid - 1)
  } else {
    return binarySearchRecursive(arr, search, mid + 1, right)
  }
}

function binarySearchIterative(arr, search) {
  let left = 0
  let right = arr.length

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] === search) return true
    if (arr[mid] < search) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

module.exports = {
  binarySearchRecursive,
  binarySearchIterative
}
