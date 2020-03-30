import { binarySearchRecursive, binarySearchIterative } from './binary-search'

describe('binary-search', () => {
  describe('recursive solution', () => {
    it('should return true when a value is found', () => {
      // arrange
      const sortedArray = [1,4,6,8,10];
    
      // act
      const result = binarySearchRecursive(sortedArray, 6, 0, sortedArray.length);
    
      // assert
      expect(result).toEqual(true)
    })
  
    it('should return false when a value is not found', () => {
      // arrange
      const sortedArray = [1,4,6,8,10];
    
      // act
      const result = binarySearchRecursive(sortedArray, 7, 0, sortedArray.length);
    
      // assert
      expect(result).toEqual(false)
    })
  })

  describe('iterative solution', () => {
    it('should return true when a value is found', () => {
      // arrange
      const sortedArray = [1,4,6,8,10];
    
      // act
      const result = binarySearchIterative(sortedArray, 6);
    
      // assert
      expect(result).toEqual(true)
    })
  
    it('should return false when a value is not found', () => {
      // arrange
      const sortedArray = [1,4,6,8,10];
    
      // act
      const result = binarySearchIterative(sortedArray, 7);
    
      // assert
      expect(result).toEqual(false)
    })
  })
})
