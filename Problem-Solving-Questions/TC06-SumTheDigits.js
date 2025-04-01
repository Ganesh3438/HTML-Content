console.log(`---------Imperative way of writing-------------`)

let n = 12345;
let sum = 0;
for(; n>0; ){
    let rem = n%10;
    // console.log(rem)
    sum = sum + rem;
    n = Math.floor(n/10)
}

console.log(sum)

// console.log('--------Declarative way of writing------------')


// // Convert number to string, then to an array of digits
// let digits = n.toString().split('').map(Number);

// // Use reduce to sum the digits
// let sum1 = digits.reduce(function(acc, val) {
//     return acc + val; // Accumulate the sum
// }, 0);

// console.log(sum1); // Output will be 15

