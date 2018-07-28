const { isPalindrome } = require('./is-palindrome.js')

describe('isPalindrome', () => {
  // assign
  const cases = [
    {input: null, output: false},
    {input: 123, output: false},
    {input: 'abc', output: false},
    {input: 'pollop', output: true},
    {input: 'poll£op@', output: true}
  ];

  cases.forEach(c => {
    it(`should return ${c.output} given input ${c.input}`, () => {
      // act
      const result = isPalindrome(c.input);
      // assert
      expect(result).toEqual(c.output)
    })
  })
})
