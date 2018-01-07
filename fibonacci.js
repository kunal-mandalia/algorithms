const assert = require('assert');

function fib (x) {
  if (typeof(x) !== 'number' || x < 1) {
    throw new Error('Invalid fib arg');
    return null;
  }
  if (x < 3) {
    return 1;
  } else {
    return fib(x-1) + fib(x-2);
  }
}

function runTests () {
  const cases = [
    {input: 1, output: 1},
    {input: 3, output: 2},
    {input: 4, output: 3},
    {input: 0, output: null}
  ]

  cases.forEach((c, i) => {
    const result = fib(c.input)
    assert(result === c.output, `Test ${i} failed. expected fib(${c.input}) === ${c.output} but received ${result}`)
  })
}

runTests();
