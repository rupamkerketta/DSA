// Move all negative elements to end

// Given an unsorted array arr[] of size N having both negative and positive integers.
// The task is place all negative element at the end of array without changing the
// order of positive element and negative element.

// Input :
// N = 8
// arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output :
// 1  3  2  11  6  -1  -7  -5

// 1st approach
// 1. We can have to arrays arr1 for positive integers and array2 for negative integers
// 2. Iterate over the loop if num < 0 array1.push(num) else -> array2.push(num)
