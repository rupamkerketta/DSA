// ? Rotate Array
// ? Given an array, rotate the array to the right by k steps, where k is non-negative.

// * Example : [1, 2, 3, 4]
// * 1st rotation -> [4, 1, 2, 3]
// * 2nd rotation -> [3, 4, 1, 2]
// * 3rd rotation -> [2, 3, 4, 1]
// * 4th rotation -> [1, 2, 3, 4]

// * So if k = length of the array then the rotation has no affect
// * If k > length of the array then -> we need to do a % operation
// * k = 91
// * 91 % 4 = 3

// In-place array reversal
function reverseArr(arr) {}

function rotateArray(arr, k) {
	let c = k % arr.length
}

const arr = [1, 2, 3, 4, 5]
rotateArray(arr, 91)
console.log(arr)
