import { BinaryTreeNode } from './types'

export default function invertBinaryTree(binaryTree: BinaryTreeNode) {
  if (!binaryTree) return binaryTree
  const temp = binaryTree.left
  binaryTree.left = invertBinaryTree(binaryTree.right)
  binaryTree.right = invertBinaryTree(temp)
  return binaryTree
}
