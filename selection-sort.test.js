const selectionSort = require("./selection-sort.js")

describe("selection-sort", () => {
  it("should sort an unsorted array of numbers ascendingly", () => {
    // assign
    const inputArray = [6,3,2,5,4,1]
    // act
    const result = selectionSort(inputArray)
    // assert
    expect(result).toEqual([1,2,3,4,5,6])
  })
})
