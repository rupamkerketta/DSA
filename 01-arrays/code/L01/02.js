// Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force approach
// Time Complexity : O(n^2)
function maximumSub01(nums) {
	let maxSum = -Infinity
	let currentSum = 0
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			currentSum += nums[j]
			if (currentSum > maxSum) {
				maxSum = currentSum
			}
		}
	}
}

// Optimal solution
// Time Complexity : O(n)
function maximumSub02(nums) {
	let maxCurrent = (maxGlobal = 0)

	for (let i = 1; i < nums.length; i++) {
		maxCurrent = Math.max(nums[i], nums[i] + maxCurrent)
		if (maxCurrent > maxGlobal) {
			maxGlobal = maxCurrent
		}
	}
	return maxGlobal
}

module.exports = {
	maximumSub01,
	maximumSub02
}
