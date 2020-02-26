function breadthFirstSearch(graph, search) {
  let queue = [graph]
  let visited = {}

  while (queue.length > 0) {
    const node = queue.shift()
    if (visited[node.id]) continue
    if (node.value === search) return true
    visited[node.id] = true
    queue.push(...node.edges)
  }
  return false
}

module.exports = breadthFirstSearch