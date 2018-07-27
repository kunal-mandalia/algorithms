const mergeSort = (inputArray = []) => {
  let arr = [...inputArray].map(n => [n])
  let result = []

  while (arr.length > 1) {
    let iterationResult = []

    for (let i = 0; i < arr.length; i += 2) {
      const msp = sortPair(arr[i], arr[i+1])
      iterationResult.push(msp)
    }
    arr = iterationResult
  }
  return arr[0]
}

const sortPair = (arr1 = [], arr2 = []) => {
  const a = [...arr1]
  const b = [...arr2]
  let result = []

  while (a.length + b.length > 0 ) {
    const l = a[0]
    const r = b[0]

    if (!l) {
      result.push(b.splice(0,1)[0])
    } else if (!r) {
      result.push(a.splice(0,1)[0])
    } else {
      (l < r) ? result.push(a.splice(0,1)[0]) : result.push(b.splice(0,1)[0])
    }
  }
  return result;
}

module.exports = {
  mergeSort,
  sortPair
}