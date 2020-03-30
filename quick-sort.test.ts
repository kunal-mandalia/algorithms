import quickSort from "./quick-sort"

describe('quick sort', () => {
  const cases = [
    {
      input: [],
      expected: []
    },
    {
      input: [1],
      expected: [1]
    },
    {
      input: [1,2],
      expected: [1,2]
    },
    {
      input: [2,1],
      expected: [1,2]
    },
    {
      input: [2,1,3],
      expected: [1,2,3]
    },
    {
      input: [2,1,3,8,5,6,6,7,4],
      expected: [1,2,3,4,5,6,6,7,8]
    }
  ]

  cases.forEach(c => {
    it(`should return ${c.expected} given ${c.input}`, () => {
      expect(quickSort(c.input)).toEqual(c.expected)
    })
  })
})
