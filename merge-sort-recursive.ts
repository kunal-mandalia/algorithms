/**
 * Sort and merge a pair of sorted arrays recursively
 * 
 * @param left sorted array
 * @param right sorted array
 * @param leftIndex index to compare to right
 * @param rightIndex index to compare to left
 */
function mergePair(left: number[], right: number[], leftIndex: number = 0, rightIndex: number = 0) {
  if (left[leftIndex] > right[rightIndex]) {
    left.splice(leftIndex, 0, right[rightIndex])
    right.splice(rightIndex, 1)
  }
  if (leftIndex < left.length - 1) {
    return mergePair(left, right, leftIndex + 1, rightIndex)
  }
  if (rightIndex < right.length - 1) {
    return mergePair(left, right, leftIndex, rightIndex + 1)
  }
  return [...left, ...right]
}

/**
 * Sort an unsorted array
 * 1. break down input array into single element arrays
 * 2. sort and merge pairs of arrays
 * 3. stop when there is only one sorted array remaining
 * 
 * @param input unsorted array
 */
export default function mergeSort(input: number[]) {
  const sorted = input.map(n => [n])
  while (sorted.length > 1) {
    const merged = mergePair(sorted[0], sorted[1])
    sorted.splice(0, 2, merged)
  }
  return sorted[0]
}
