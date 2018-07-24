const bubbleSort = require("./bubble-sort.js")

describe("bubble-sort", () => {
  it("should sort an unsorted array of numbers ascendingly", async () => {
    // assign
    const inputArray = [6,3,2,5,4,1]
    // act
    const result = await bubbleSort(inputArray)
    // assert
    expect(result).toEqual([1,2,3,4,5,6])
  })
})
