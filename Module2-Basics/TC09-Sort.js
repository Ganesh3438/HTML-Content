let nums = [10, 5, 8, 1];

// let res = nums.sort()  // Default sort is lexicographical, which doesn’t work well for numbers
// console.log(res)  

nums.sort((a,b)=> a-b)
console.log(nums)



// Process:
// 2. Default Sorting Behavior
// By default, JavaScript's sort() method converts elements to strings and sorts them lexicographically (like alphabetical sorting). 
// For example, it would sort [10, 5, 8, 1] as [1, 10, 5, 8] (which is wrong for numbers).

// 3. Custom Comparator Function
// To correctly sort the numbers, you provide a custom comparator function (a, b) => a - b. 
// This function helps JavaScript sort the array based on actual numeric values.

// The function is called for every pair of elements in the array.
// The sort method expects:
// Negative value if a should come before b (meaning a < b).
// Positive value if a should come after b (meaning a > b).
// Zero if a and b are equal.
// 4. Comparison Process (Step-by-Step)
// Now let's walk through the sorting process:

// Step 1:
// Compare 10 and 5:
// The comparator function does 10 - 5, which equals 5 (positive).
// Since it's positive, 5 should come before 10.
// Swap 10 and 5: nums = [5, 10, 8, 1].
// Step 2:
// Compare 10 and 8:
// The comparator function does 10 - 8, which equals 2 (positive).
// Since it's positive, 8 should come before 10.
// Swap 10 and 8: nums = [5, 8, 10, 1].
// Step 3:
// Compare 10 and 1:
// The comparator function does 10 - 1, which equals 9 (positive).
// Since it's positive, 1 should come before 10.
// Swap 10 and 1: nums = [5, 8, 1, 10].
// Step 4:
// Compare 5 and 8:
// The comparator function does 5 - 8, which equals -3 (negative).
// Since it's negative, 5 should stay before 8.
// No change: nums = [5, 8, 1, 10].
// Step 5:
// Compare 5 and 1:
// The comparator function does 5 - 1, which equals 4 (positive).
// Since it's positive, 1 should come before 5.
// Swap 5 and 1: nums = [1, 5, 8, 10].