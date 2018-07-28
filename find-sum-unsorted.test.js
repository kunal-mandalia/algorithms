const { findSumUnsorted } = require('./find-sum-unsorted.js')

describe('findSumUnsorted', () => {
  // assign
  const cases = [
    {input: {arr: [1,3,2,9], sum: 8}, output: false},
    {input: {arr: [1,4,2,4], sum: 8}, output: true},
  ]

  cases.forEach((c, i) => {
    // act
    const result = findSumUnsorted(c.input.arr, c.input.sum);
    // assert
    it(`should return ${c.output} given input ${c.input.arr}`, () => {
      expect(result).toEqual(c.output)
    })
  })
})
