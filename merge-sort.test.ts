import mergeSort, { merge } from './merge-sort'

describe('merge sort', () => {
  const cases = [
    {
      input: [1,5,3,2,4],
      expected: [1,2,3,4,5]
    },
    {
      input: [2,4],
      expected: [2,4]
    },
    {
      input: [1],
      expected: [1]
    },
    {
      input: [],
      expected: []
    },
    {
      input: [4,2,2,1,3,7,6,7,8,5],
      expected: [1,2,2,3,4,5,6,7,7,8]
    }
  ]

  cases.forEach(c => {
    it(`should return ${c.expected} given input ${c.input}`, () => {
      expect(mergeSort(c.input)).toEqual(c.expected)
    })
  })
})

describe('merge', () => {
  const cases = [
    {
      left: [],
      right: [],
      expected: []
    },
    {
      left: [1],
      right: [],
      expected: [1]
    },
    {
      left: [],
      right: [2],
      expected: [2]
    },
    {
      left: [1],
      right: [2],
      expected: [1,2]
    },
    {
      left: [1],
      right: [2,3],
      expected: [1,2,3]
    },
    {
      left: [1,2],
      right: [3,4],
      expected: [1,2,3,4]
    },
    {
      left: [1,3],
      right: [2,4],
      expected: [1,2,3,4]
    },
    {
      left: [1,4],
      right: [2,3],
      expected: [1,2,3,4]
    }
  ]
  cases.forEach(c => {
    it(`should return ${c.expected} given left ${c.left}, right ${c.right}`, () => {
      expect(merge(c.left, c.right)).toEqual(c.expected)
    })
  })
})
