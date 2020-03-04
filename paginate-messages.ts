export default function paginateMessages(s: string, maxSize: number): string[] | null {
  const words = s.split(' ')
  let messages = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.length > maxSize) {
      return null
    }
    
    const lastMessage = messages[messages.length - 1]
    if (!lastMessage) {
      messages.push(word)
    } else if (lastMessage.length + word.length + (i > 0 ? 1 : 0) <= maxSize) {
      messages[messages.length - 1] = `${lastMessage} ${word}`
    } else {
      messages.push(word)
    }
  }
  return messages
}
