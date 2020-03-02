import { TreeNode } from "./types";

export default function depthFirstSearch(tree: TreeNode, search: number) {
  const stack = [tree]
  const seen = []
  while (stack.length > 0) {
    const node = stack.pop()
    seen.push(node.value)
    
    if (!node) continue
    if (node.value === search) {
      return {
        seen,
        found: true
      }
    }
    stack.push(...node.edges.reverse())
  }
  return {
    seen,
    found: false
  }
}
