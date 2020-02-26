const breadthFirstSearch = require('./breadth-first-search')

describe('breadth first search', () => {
  describe('recursive solution', () => {
    it('should return true if a search value is found', () => {
      // arrange
      const graph = {
        id: 1,
        value: 100,
        edges: [
          {
            id: 2,
            value: 102,
            edges: [
              {
                id: 4,
                value: 104,
                edges: []
              }
            ]
          },
          {
            id: 3,
            value: 103,
            edges: []
          }
        ]
      }

      // act
      const actual = breadthFirstSearch(graph, 104)

      // assert
      expect(actual).toEqual(true)
    })

    it('should return false if a search value is not found', () => {
      // arrange
      const graph = {
        id: 1,
        value: 100,
        edges: [
          {
            id: 2,
            value: 102,
            edges: [
              {
                id: 4,
                value: 104,
                edges: []
              }
            ]
          },
          {
            id: 3,
            value: 103,
            edges: []
          }
        ]
      }

      // act
      const actual = breadthFirstSearch(graph, 200)

      // assert
      expect(actual).toEqual(false)
    })
  })
})