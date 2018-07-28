const { fibonacci } = require('./fibonacci') 

describe("fibonacci", () => {
  // assign
  const cases = [
    {input: 1, output: 1},
    {input: 3, output: 2},
    {input: 4, output: 3},
  ]

  cases.forEach((c, i) => {
    it(`should return ${c.output} given input ${c.input}`, () => {
      // act
      const result = fibonacci(c.input)
      // assert
      expect(result).toEqual(c.output)
    })
  })
})
