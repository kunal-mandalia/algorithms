import mergeSort from './merge-sort-recursive'

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