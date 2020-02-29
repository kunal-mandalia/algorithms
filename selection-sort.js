function swap(arr, to, from) {
  const toValue = arr[to]
  arr[to] = arr[from]
  arr[from] = toValue
}

function selectionSort(arr) {
  let minIndex
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}

module.exports = selectionSort