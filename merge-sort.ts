export default function mergeSort(input: number[]) {
  if (input.length < 2) return input
  const middle = Math.floor(input.length / 2)
  const left = input.slice(0, middle)
  const right = input.slice(middle, input.length)
  // console.log('left, right', left, right)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 
 * @param left sorted array
 * @param right sorted array
 */
export function merge(left: number[], right: number[]) {
  let result = []
  let i = 0
  let j = 0

  if (!left.length) {
    return right
  }
  if (!right.length) {
    return left
  }

  while (result.length < left.length + right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      if (i === left.length - 1) {
        result.push(...right.slice(j,right.length))
      }
      i++
    } else {
      result.push(right[j])
      if (j === right.length - 1) {
        result.push(...left.slice(i,left.length))
      }
      j++
    }
  }
  return result
}
