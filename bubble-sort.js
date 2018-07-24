const bubbleSort = inputArray => {
  return new Promise(resolve => {
    const sort = arr => {
      let didSwap = false
      for (let i = 0; i < arr.length - 1; i++) {
        const l = arr[i]
        const r = arr[i+1]
        if (l > r) {
          inputArray.splice(i, 2, r, l)
          didSwap = true
        }
      }
      didSwap ? sort(inputArray) : resolve(inputArray)
    }
    sort(inputArray)
  })
}

module.exports = bubbleSort
