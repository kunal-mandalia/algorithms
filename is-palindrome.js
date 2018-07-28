function isPalindrome (arg) {
  if (typeof arg !== 'string') return false
  const alphanumericOnly = arg.replace(/[^a-z0-9]/gi, "")
  return alphanumericOnly === alphanumericOnly.split('').reverse().join('')
}

module.exports = {
  isPalindrome
}
