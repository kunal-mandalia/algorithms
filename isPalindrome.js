const assert = require('assert')

function isPalindrome (arg) {
  if (typeof arg !== 'string') return false;
  const alphanumericOnly = arg.replace(/[^a-z0-9]/gi, "");
  return alphanumericOnly === alphanumericOnly.split('').reverse().join('');
}

function runTests () {
  const cases = [
    {input: null, output: false},
    {input: 123, output: false},
    {input: 'abc', output: false},
    {input: 'pollop', output: true},
    {input: 'poll£op@', output: true}
  ];

  cases.forEach((c, i) => {
    const result = isPalindrome(c.input);
    assert(result === c.output, `Test case ${i} failed: ${c.input}`);
  })
}

runTests();