const twoSum = require('../../code/01-arrays/L01/01')

describe('Tests for 01-arrays Level 01', () => {
	it('Should successfully return an array of two indices for a valid sum pair', () => {
		const arr1 = [1, 4, 7, 9]
		const arr2 = [1, 3, 4, 4]

		expect(twoSum(arr1, 11)).toContain(1)
		expect(twoSum(arr1, 11)).toContain(2)
	})
})
