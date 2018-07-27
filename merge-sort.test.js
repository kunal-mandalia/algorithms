const { mergeSort, sortPair } = require("./merge-sort.js")

describe("merge-sort", () => {
  it("should sort an unsorted array of numbers ascendingly", () => {
    // assign
    const inputArray = [6,3,2,5,4,1]
    // act
    const result = mergeSort(inputArray)
    // assert
    expect(result).toEqual([1,2,3,4,5,6])
  })

  it("should sort an array containing duplicate numbers", () => {
    // assign
    const inputArray = [6,3,5,5,4,1]
    // act
    const result = mergeSort(inputArray)
    // assert
    expect(result).toEqual([1,3,4,5,5,6])
  })
})

describe("sortPair", () => {
  it("should sort and merge pair of arrays", () => {
    // assign
    const arr1 = [3,4,6]
    const arr2 = [1,2,5]
    // act
    const result = sortPair(arr1, arr2)
    // assert
    expect(result).toEqual([1,2,3,4,5,6])
  })
})