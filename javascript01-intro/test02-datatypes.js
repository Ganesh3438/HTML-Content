// Data types in JS:
// We dont need to specify the data types in javascript either we use var, let and const

// There are two types of data types:
// 1. primitive data type 2. Reference data types

// Primitive data types are nothing but Number, String, Boolean, Undefined and Null
// Reference data types are Objects, Arrays and functions

// What is Arrays?
// Array is a data structure which holds similar kind of data in indexed order

// Declaration of array in JS:
let arr = [1, 2, 3, 4, 5]
console.log(arr);

// Access an element with index from an array
console.log(arr[2]); // 3
console.log(arr[5]); // undefined

// In JS everything, every data type will be allowed inside of an array
let arr1= [1, 'Hello', true, undefined, null, [1,2,3]];
console.log(arr1);
let d = arr1[5];
console.log(d[1]);

