import paginateMessagesOptimised from './paginate-messages-optimised'

describe('paginate messages optimised', () => {
  const cases = [
    {
      s: 'The quick brown fox',
      maxSize: 5,
      expected: 4
    },
    {
      s: 'The first person on the Moon was',
      maxSize: 12,
      expected: 3
    },
    {
      s: 'Galois Theory is the study of geometric symmetry',
      maxSize: 8,
      expected: -1
    },
    {
      s: 'Okay Google',
      maxSize: 6,
      expected: 2
    }
  ]

  cases.forEach(c => {
    it(`should return ${c.expected} given (s: ${c.s}, maxSize: ${c.maxSize})`, () => {
      expect(paginateMessagesOptimised(c.s, c.maxSize)).toEqual(c.expected)
    })
  })
})
