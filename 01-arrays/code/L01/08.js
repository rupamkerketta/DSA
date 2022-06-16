// Sort an array of 0s, 1s and 2s
// Given an array of size N containing only 0s, 1s, and 2s;
// sort the array in ascending order.

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

// * [0, 2, 1, 2, 0]

// * 1st approach
// * ------------
// * const counter = [[0, 0], [1, 0], [2, 0]]
// * if num === 0 -> 'YES' -> counter[0][1]++
// * if num === 1 -> 'YES' -> counter[1][1]++
// * if num === 2 -> 'YES' -> counter[2][1]++

let idx = 0
for (const count of counter) {
	let num = count[0]
	let c = count[1]

	while (c > 0) {
		arr[idx++] = num
		c--
	}
}
