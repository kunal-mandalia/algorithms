/**
 * Sort and merge a pair of sorted arrays recursively
 * 
 * @param left sorted array
 * @param right sorted array
 * @param leftIndex index to compare to right
 * @param rightIndex index to compare to left
 */
export function mergePair(left: number[], right: number[], i: number = 0, j: number = 0) {
  // since `left` and `right` are sorted arrays if `left` is empty return `right`
  if (left.length === 0) {
    return right
  }

  // items are removed from `right` once they are sorted and inserted into `left`
  // if no items remain then we are done
  if (right.length === 0) {
    return left
  }

  if (left[i] > right[j]) {
    left.splice(i,0,right[j])
    right.splice(j,1)
    // there is always a next item in `left` since we have inserted an element from `right`
    return mergePair(left, right, i+1, j)
  }

  // the largest number in `left` is smaller than the smallest number in `right`
  // therefore both are sorted relative to each other so flatten and return
  if (i === left.length - 1) {
    return [...left,...right] 
  }

  // compare the next largest number from `left` since the current number is smaller than `right`
  return mergePair(left, right, i+1, j)
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
