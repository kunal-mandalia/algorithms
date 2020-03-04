export default function paginateMessagesOptimised(s: string, maxSize: number): number {
  let result = 0
  let newSentence = ''

  const words = s.split(' ')
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.length > maxSize) return -1
    if ((newSentence.length + word.length) < maxSize) {
      newSentence = newSentence ? `${newSentence} ${word}` : word
    } else if (newSentence.length + word.length === maxSize) {
      result++
      newSentence = ''
    } else {
      result++
      newSentence = word
    }
  }
  if (newSentence) {
    result++
  }
  return result
}
