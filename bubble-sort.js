const bubbleSort = arr => {
  let didSwap = true
  while (didSwap) {
    didSwap = false
    for (let i = 0; i < arr.length - 1; i++) {
      const l = arr[i]
      const r = arr[i+1]
      if (l > r) {
        arr.splice(i, 2, r, l)
        didSwap = true
      }
    }
  }
  return arr
}

module.exports = bubbleSort
