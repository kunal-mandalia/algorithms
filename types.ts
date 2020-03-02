export type BinaryTreeNode = {
  value: number,
  left: BinaryTreeNode,
  right: BinaryTreeNode
} | null

export type TreeNode = {
  value: number,
  edges: TreeNode[]
}
