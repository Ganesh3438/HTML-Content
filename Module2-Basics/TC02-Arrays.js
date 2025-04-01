// In JavaScript, an array is a special type of object used to store multiple values in a single 
// variable. 
// Arrays can hold elements of any data type, including numbers, strings, objects, and even other 
// arrays. 
 
var arr = [1,"Ferrai", true, 12.123]
console.log(arr)

// Accesssing the elements
console.log('---------------------------')
var res= arr[3]
console.log(res)

// Replace the elements of an array by using index
arr[1] = "Bentley"
console.log('---------------------------')
console.log(arr)

var len = arr.length;
console.log(`The length of the array is: ${len}`)


// ------------------------------------------------------------------------------------------------------------
console.log("----------------------------")
// Declaring an Array
// Using square brackets (recommended)

let fruits = ["Apple", "Banana", "Mango"]
console.log(fruits)

let result_Mango = fruits[2];
console.log(`Fetching the third value ${result_Mango}`)
