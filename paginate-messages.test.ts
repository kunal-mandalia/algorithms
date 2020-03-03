import paginateMessages from './paginate-messages'

describe('paginate messages', () => {
  const cases = [
    {
      s: 'The quick brown fox',
      maxSize: 5,
      expected: ['The', 'quick', 'brown', 'fox']
    },
    {
      s: 'The first person on the Moon was',
      maxSize: 12,
      expected: ['The first', 'person on', 'the Moon was']
    },
    {
      s: 'Galois Theory is the study of geometric symmetry',
      maxSize: 8,
      expected: null
    }
  ]

  cases.forEach(c => {
    it(`should return ${c.expected} given (s: ${c.s}, maxSize: ${c.maxSize})`, () => {
      expect(paginateMessages(c.s, c.maxSize)).toEqual(c.expected)
    })
  })
})
