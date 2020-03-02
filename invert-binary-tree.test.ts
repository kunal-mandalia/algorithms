import invertBinaryTree from './invert-binary-tree'

describe('invert binary tree', () => {
  it('should reverse the nodes in a tree with height 2', () => {
    // arrange
    const inputBinaryTree = {
      value: 2,
      left: {
        value: 1,
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
    expect(invertBinaryTree(inputBinaryTree)).toMatchSnapshot()
  })

  it('should reverse nodes in a tree with height 3', () => {
    // arrange
    /**
     * input:
     * 
     *     4
     *  2     6
     * 1,3   5, _
     * 
     * expected output:
     * 
     *     4
     *   6    2
     *  _,5  3, 1
     * 
     */
    const inputBinaryTree = {
      value: 4,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 3,
          left: null,
          right: null
        }
      },
      right: {
        value: 6,
        left: {
          value: 5,
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