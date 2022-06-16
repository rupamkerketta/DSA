// Union of two arrays

// Given two arrays a[] and b[] of size n and m respectively.
// The task is to find union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct
// elements from both the arrays.If there are repetitions, then only one
// occurrence of element should be printed in the union.

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output:
// 5
// Explanation:
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.

// * 1st approach
// * ------------
// * 1. Create an empty hash map
// * 2. Add elements to the hash map
// * 3. Return the size of the hash map

function doUnion(arr1, arr2) {
	const mMap = new Map()

	for (const num of arr1) {
		mMap.set(num, '')
	}

	for (const num of arr2) {
		mMap.set(num, '')
	}

	return mMap.size
}
