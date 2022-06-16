// ? Move Zeroes

// * Input    : [0,1,0,3,12]
// * Output   : [1, 3, 12, 0, 0]

// * 1st approach
// * ------------
// * 1. We can create an empty array and fill it with zeroes
// * 2. And the length should be equal to the given array
// * 3. We need to hava a counter variable c = 0
// * 4. Whenever a non-zero element is encountered we need to replace 0
// *    with the non-zero element and increment the counter variable which is c
// * Time Complexity : O(n)

function moveZeroes1(arr) {
	const auxArr = new Array(arr.length).fill(0)
	let c = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			auxArr[c++] = arr[i]
		}
	}
	return auxArr
}

// * 2nd approach
// * ------------
// * In place operation
// * 1. We need to have a counter variable c = 0
// * 2. We need to iterate over the given array
// * 3. On encountering 0 we need to increment the value of c
// * 4. On encountering a non-zero element we need to shift that element backwards
// *    using the value of c

// * O(n+n) -> O(2n) -> O(n)
function moveZeroes2(arr) {
	let c = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			c++
		} else {
			arr[i - c] = arr[i]
		}
	}

	c++
	while (c < arr.length) {
		arr[c++] = 0
	}
}

module.exports = {
	moveZeroes1,
	moveZeroes2
}
