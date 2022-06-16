// Subarray with given sum

// Given an unsorted array A of size N that contains only non - negative integers,
// find a continuous sub - array which adds to a given number S.

// In case of multiple subarrays, return the subarray which comes first on moving from left to right.

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

// * 1st approach
// * ------------
// * 1. Two pointer p1 and p2 initially set to 0 and sum = arr[0]
// * 2. Increment p2 till sum <= targetSum
// * 3. If sum > targetSum then -> subtract element at p1 from the sum and then increment p1
// * 4. If sum === targetSum then return [p1+1, p2+1]

// Input:
// N = 10, S = 15
// A[] = {1,2,3,4,5,6,7,8,9,10}
// Output: 1 5
// Explanation: The sum of elements
// from 1st position to 5th position
// is 15.

// * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * p1, p2 @ 0th index sum = 15
// * is sum === targetSum -> 'NO' then -> p2++ -> 4
// * is sum === targetSum -> 'YES' then -> return [p1+1, p2+1]
