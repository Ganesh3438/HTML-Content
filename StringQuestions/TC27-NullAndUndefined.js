// In JavaScript, null and undefined are both used to represent the absence of a value, 
// but they have distinct differences:

// 1. undefined
// A variable that has been declared but has not been assigned a value is undefined.
// It is the default value of uninitialized variables.
// It is also the return value of functions that do not explicitly return anything.
// When accessing an object property or array element that does not exist, JavaScript returns 
// undefined.

let a;
console.log(a); // undefined

function test() {}
console.log(test()); // undefined

let obj = {};
console.log(obj.prop); // undefined

let arr = [1, 2, 3];
console.log(arr[5]); // undefined

// 2. null
// null is an explicit assignment that represents "no value" or "empty."
// It is a special value that developers assign intentionally to indicate the absence of an object.

let b = null;
console.log(b); // null

let person = { name: "John", age: null };
console.log(person.age); // null



