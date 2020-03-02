import insertIntoBinaryTree from './insert-into-binary-tree'

describe('insert into binary tree', () => {
  it('should insert node at max depth', () => {
    // arrange
    const tree = {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: null
    }

    const node = {
      value: 3,
      left: null,
      right: null,
    }

    // act
    // assert
    expect((insertIntoBinaryTree(tree, node))).toMatchSnapshot()
  })

  it('should insert node between root and max level', () => {
    // arrange
    const tree = {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 100,
        left: null,
        right: null
      }
    }

    const node = {
      value: 3,
      left: null,
      right: null,
    }

    /**
     *  1
     * 2 100
     * 
     *    1
     *  2,null  
     */

    // act
    // assert
    expect((insertIntoBinaryTree(tree, node))).toMatchSnapshot()
  })

  it('should insert node between root and max level (2)', () => {
    // arrange
    const tree = {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 100,
        right: null,
        left: null
      }
    }

    const node = {
      value: 150,
      left: {
        value: 50,
        left: null,
        right: null
      },
      right: null,
    }

    /**
     *  1
     * 2 100
     * 
     *    1
     *  2,null  
     */

    // act
    // assert
    expect((insertIntoBinaryTree(tree, node))).toMatchSnapshot()
  })
})