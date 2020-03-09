/**
 * Merge sort an unsorted array recursively
 * 
 * Time complexity: O(n*log(n)) since the mergeSort is called recursively (log(n))
 * and merging two arrays is O(n)
 * Space complexity: O(n*log(n))
 * 
 * @param input unsorted array
 */
export default function mergeSort(input: number[]) {
  if (input.length < 2) return input
  const middle = Math.floor(input.length / 2)
  const left = input.slice(0, middle)
  const right = input.slice(middle, input.length)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * Merge two sorted arrays in sorted order
 * 
 * Time complexity: O(l+r) where l is the length of left array and r is the length of the right array
 * Space complexity: O(l+r)
 * 
 * @param left sorted array
 * @param right sorted array
 */
export function merge(left: number[], right: number[]) {
  let result = []
  let i = 0 // index cursor over left array
  let j = 0 // index cursor over right array

  if (left.length === 0) return right
  if (right.length === 0) return left

  while (result.length < left.length + right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      // if this is the last element of the left array then push all elements
      // from the right array to the result because all remaining elements of the sorted right
      // array are greater than what's in the result array
      if (i === left.length - 1) {
        result.push(...right.slice(j, right.length))
      }
      i++
    } else {
      result.push(right[j])
      // if this is the last element of the right array then push all elements
      // from the left array to the result because all remaining elements of the sorted left
      // array are greater than what's in the result array
      if (j === right.length - 1) {
        result.push(...left.slice(i, left.length))
      }
      j++
    }
  }
  return result
}
