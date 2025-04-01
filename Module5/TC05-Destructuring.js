// The destructuring assignement syntax is a JavaScript expression that makes it possible to unpack 
// values from arrays, or properties from objects, into distinct variables.

let arr = ['Hi', 'I', 'am', 'Mohan']
let res= arr[1];
let ans = arr[2];

console.log(res)
console.log(ans)

console.log('------------------------')

let [a, b, c, d] = arr;

console.log(a)
console.log(b)
console.log(c)
console.log(d)