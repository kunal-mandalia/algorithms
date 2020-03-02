import { BinaryTreeNode } from "./types";

export default function insertIntoBinaryTree(tree: BinaryTreeNode, node: BinaryTreeNode) {
  if (!node) return tree
  if (!tree) return node
  if (tree.value > node.value) {
    tree.left = insertIntoBinaryTree(tree.left, node)
  } else {
    tree.right = insertIntoBinaryTree(tree.right, node)
  }
  return tree
}