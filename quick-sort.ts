/**
 * 
 * Quick sort without in-place sorting
 * 
 * Time complexity: O(n*(log(n)))
 * Space complexity: O(n*(log(n)))
 * 
 * @param input unsorted array
 */
export default function quickSort(input: number[]) {
  // set pivot to be the last element of list
  const pivot = input[input.length - 1]
  let left = []
  let right = []
  // handle terminal case
  if (input.length < 2) return input
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < pivot) {
      left.push(input[i])
    } else {
      right.push(input[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
