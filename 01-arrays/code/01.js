// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
	// Map for storing the array elements
	const arrMap = new Map()

	// Iterate over the array
	for (let i = 0; i < arr.length; i++) {
		if (arrMap.has(target - nums[i])) {
			return [i, arrMap.get(target - nums[i])]
		} else {
			// key -> current num
			// value -> current index
			arrMap.set(nums[i], i)
		}
	}

	// If a valid pair doesn't exist then return an empty array
	return []
}
