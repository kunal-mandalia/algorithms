export function binarySearchRecursive(arr: number[], search: number, left: number, right: number) {
  if (left > right) return false

  const mid = Math.floor(left + (right - left) / 2)
  if (arr[mid] === search) return true
  if (arr[mid] < search) {
    return binarySearchRecursive(arr, search, left, mid - 1)
  } else {
    return binarySearchRecursive(arr, search, mid + 1, right)
  }
}

export function binarySearchIterative(arr: number[], search: number) {
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
