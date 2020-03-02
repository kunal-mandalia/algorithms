type BinaryTree = {
  value: number,
  left: BinaryTree,
  right: BinaryTree
} | null

export default function invertBinaryTree(binaryTree: BinaryTree) {
  if (!binaryTree) return binaryTree
  const temp = binaryTree.left
  binaryTree.left = invertBinaryTree(binaryTree.right)
  binaryTree.right = invertBinaryTree(temp)
  return binaryTree
}
