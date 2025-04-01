let arr = [1,2,3,4,5];

// Map
// The map() function is an array method that creates a new array by applying a transformation 
// (or callback function) to each element in the original array. It iterates over each element of 
// the array numbers and applies the transformation n => n * 2 to each element.

let doubled = arr.map(n=>n*2);
console.log(doubled)

// Arrow Function n => n * 2
// The arrow function is a concise way of writing a function. This specific arrow function takes one argument, 
// n, which represents each element of the array as it's processed. The function simply multiplies the element 
// n by 2.

// In expanded form, the arrow function:

// function(n) {
//   return n * 2;
// }

let emptyArray = [];
for(let i=0; i<arr.length; i++){
    emptyArray[i]= arr[i]*2;
}

console.log('The array value are:' + emptyArray)


