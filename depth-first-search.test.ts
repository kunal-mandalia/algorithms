import depthFirstSearch from './depth-first-search'
import { TreeNode } from './types'

describe('depth first search', () => {
  it('should return true if search value is found', () => {
    // arrange
    const tree: TreeNode = {
      value: 100,
      edges: [
        {
          value: 50,
          edges: [
            {
              value: 25,
              edges: []
            }
          ]
        },
        {
          value: 80,
          edges: []
        },
        {
          value: 150,
          edges: [
            {
              value: 120,
              edges: []
            }
          ]
        }
      ]
    }

    // act
    const { found, seen } = depthFirstSearch(tree, 80)

    // assert
    expect(found).toBe(true)
    expect(seen).toEqual([100, 50, 25, 80])
  })

  it('should return false when a search value cannot be found', () => {
    // arrange
    const tree: TreeNode = {
      value: 100,
      edges: [
        {
          value: 50,
          edges: [
            {
              value: 25,
              edges: []
            }
          ]
        },
        {
          value: 80,
          edges: []
        },
        {
          value: 150,
          edges: [
            {
              value: 120,
              edges: []
            }
          ]
        }
      ]
    }

    // act
    const { found, seen } = depthFirstSearch(tree, 404)

    // assert
    expect(found).toBe(false)
    expect(seen).toEqual([100, 50, 25, 80, 150, 120])
  })
})
