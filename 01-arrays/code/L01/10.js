// Find Missing number on integer array from 1 to 100

// arr = [1, 4, 2, 2]

// * 1st approach
// * ------------
// * Brute force approach
// * 1. A list of numbers from [1-n]
// * 2. The actual list of numbers (the given input)
// * 3. Two nested loop and we will check for each number from [0-n] and
// *    compare it with every number from the actual list
// const correctList = [1, 2, 3, 4]
// const actualList = [4, 1, 2, 2]
// const missingNums = []
// for (const num1 of correctList) {
// 	let exist = false
// 	for (const num2 of actualList) {
// 		if (num2 === num1) {
// 			exist = true
// 			break
// 		}
// 	}
// 	if (!exist) {
// 		missingNums.push(num1)
// 	}
// }
// console.log(missingNums)
// ! Time Complexity : O(n^2)

// * 2nd approach
// * ------------
// * 1. If we have a close look at the input array [1, 4, 2, 3]
// * 2. We see that we can get all the indices from [0 -> n-1] by subtracting 1 from each element
// * 3. They prefectly correspond with the indices in range
// * 4. [1, 4, 2, 3]
// *     |    \/  /
// *     |    / \/
// *     |   /  / \
// *    [0, 1, 2, 3]
// * 5. We can mark the indices by giving them a -ve sign
// * 6. All the nos. which don't have a -ve sign can be cherry picked and be subtracted by 1
// * 7. Then the result with the cherry picked and modified numbers can be returned as an array
// * Time Complexity : (n)
