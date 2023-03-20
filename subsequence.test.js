const subsequence = require("./subsequence.js")

describe("subsequence", () => {
  it("should sort an unsorted array of numbers ascendingly", () => {
    // assign
    const arr1 = [5,1,22,25,6,-1,8,10]
    const arr2 = [1,6,-1,10]
    // act
    const result = subsequence(arr1, arr2)
    // assert
    expect(result).toEqual(true)
  })
})
