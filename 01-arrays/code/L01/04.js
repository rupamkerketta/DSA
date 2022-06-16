// ? Contains Duplicate

// * 1st approach
// * ------------
// * 1. We create a empty hash map
// * 2. We iterate over the array
// * 3. As we iterate over the array
// *  - We check if the current number is present in the hash map
// *  - If 'YES' -> we return true
// *  - Else -> we add the element to the hash map
// * Time Complexity : O(n)
// * Space Complexity : O(n)

function containsDuplicate1(arr) {
	const mMap = new Map()

	for (const num of arr) {
		if (mMap.has(num)) {
			return true
		} else {
			mMap.set(num, '')
		}
	}
	return false
}

// * Brute force approach
// * --------------------
// * [1, 2, 3, 11]
// *  1 -> 2, 3, 11
// *  2 -> 3, 11
// *  3 -> 11
// ! Time Complexity : O(n^2)
// * Space Complexity : O(1)

function containsDuplicate2(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				return true
			}
		}
	}
	return false
}
console.log(containsDuplicate2([0, 5, 7, 8, 9]))

module.exports = {
	containsDuplicate1,
	containsDuplicate2
}
