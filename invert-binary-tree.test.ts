import invertBinaryTree from './invert-binary-tree'

describe('invert binary tree', () => {
  it('should reverse the nodes in a tree with height 2', () => {
    // arrange
    const inputBinaryTree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    }

    // act
    // assert
    expect(invertBinaryTree(inputBinaryTree)).toMatchObject({
      value: 1,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: {
        value: 2,
        left: null,
        right: null
      }
    })
  })

  it('should reverse nodes in a tree with height 3', () => {
    // arrange
    /**
     * input:
     * 
     *     1
     *  2     3
     * 4,5   6, _
     * 
     * expected output:
     * 
     *     1
     *   3    2
     *  _,6  5, 4
     * 
     */
    const inputBinaryTree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: null
      }
    }
    // act
    // assert
    expect(invertBinaryTree(inputBinaryTree)).toMatchSnapshot()
  })
})