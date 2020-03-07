import mergeSort, { mergePair } from './merge-sort-recursive'

describe('merge sort (recursive)', () => {
  describe('should sort an unsorted array of numbers', () => {
    // arrange
    const cases = [
      {
        input: [1],
        expected: [1]
      },
      {
        input: [2,1],
        expected: [1,2]
      },
      {
        input: [5,2,9,12,1],
        expected: [1,2,5,9,12]
      },
    ]

    // act
    cases.forEach(c => {
      it(`should return ${JSON.stringify(c.expected)} given input ${JSON.stringify(c.input)}`, () => {
        // assert
        expect(mergeSort(c.input)).toEqual(c.expected)
      })
    })
  })
})


describe('merge pair (recursive)', () => {
  const cases = [
    {
      left: [1,2],
      right: [3,4],
      expected: [1,2,3,4]
    },
    {
      left: [1,4],
      right: [2,3],
      expected: [1,2,3,4]
    },
    {
      left: [3,4],
      right: [1,2],
      expected: [1,2,3,4]
    },
    {
      left: [1,3,5],
      right: [2,4,6],
      expected: [1,2,3,4,5,6]
    },
    {
      left: [1,3],
      right: [2,4,5],
      expected: [1,2,3,4,5]
    },
    {
      left: [3],
      right: [1,2,4,5],
      expected: [1,2,3,4,5]
    },
    {
      left: [],
      right: [1,2,3,4,5],
      expected: [1,2,3,4,5]
    }
  ]

  cases.forEach(c => {
    it(`should return ${c.expected} given left ${c.left}, right ${c.right}`, () => {
      expect(mergePair(c.left, c.right)).toEqual(c.expected)
    })
  })
})
