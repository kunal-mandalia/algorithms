const fibonacci = x => {
  if (typeof(x) !== 'number' || x < 1) {
    throw new Error('Invalid fib arg');
    return null;
  }
  if (x < 3) {
    return 1;
  } else {
    return fibonacci(x-1) + fibonacci(x-2);
  }
}

module.exports = {
  fibonacci
}
