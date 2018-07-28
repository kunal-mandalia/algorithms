const { findSum } = require('./find-sum')

describe('findSum', () => {
  // assign
  const cases = [
    {input: {arr: [1,2,3,9], sum: 8}, output: false},
    {input: {arr: [1,2,4,4], sum: 8}, output: true},
  ]

  cases.forEach((c, i) => {
    it(`should return ${c.output} given input ${c.input.arr}`, () => {
      // act
      const result = findSum(c.input.arr, c.input.sum)
      // assert
      expect(result).toEqual(c.output)
    })
  })
})
