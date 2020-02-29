function swap(arr, to, from) {
  const toValue = arr[to]
  arr[to] = arr[from]
  arr[from] = toValue
}

function selectionSort(arr) {

  let sortedCount = 0
  let minIndex
  let [minValue] = arr
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - sortedCount; j++) {
      if (arr[j + sortedCount] < minValue) {
        minValue = arr[j + sortedCount]
        minIndex = j + sortedCount
      }
    }
    swap(arr, sortedCount, minIndex)
    sortedCount++
    minValue = Infinity
  }
  return arr
}

module.exports = selectionSort