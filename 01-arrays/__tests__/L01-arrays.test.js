const twoSum = require('../code/L01/01')
const { moveZeroes1, moveZeroes2 } = require('../code/L01/03')
const { containsDuplicate1, containsDuplicate2 } = require('../code/L01/04')

describe('Tests for 01-arrays Level 01', () => {
	describe('Tests for Q.01', () => {
		it('Q.01 Should successfully return an array of two indices for a valid sum pair', () => {
			const arr1 = [1, 4, 7, 9]
			const arr2 = [1, 3, 4, 4]

			expect(twoSum(arr1, 11)).toContain(1)
			expect(twoSum(arr1, 11)).toContain(2)

			expect(twoSum(arr2, 8)).toContain(2)
			expect(twoSum(arr2, 8)).toContain(3)
		})

		it('Q.03 Should successfully move all to 0s (zeroes) to the end of the array', () => {
			const arr = [0, 1, 0, 3, 4]

			expect(moveZeroes1(arr).join('')).toEqual('13400')
			moveZeroes2(arr)
			expect(arr.join('')).toEqual('13400')
		})

		it('Q.04 Should successfully check if the arr contains duplicate numbers or not', () => {
			const arr = [
				[1, 3, 5, 6, 7, 9, 1],
				[0, 5, 7, 8, 9]
			]

			expect(containsDuplicate1(arr[0])).toBeTruthy()
			expect(containsDuplicate1(arr[1])).toBeFalsy()

			expect(containsDuplicate2(arr[0])).toBeTruthy()
			expect(containsDuplicate2(arr[1])).toBeFalsy()
		})
	})
})
