// Reduce: Reduce the array to a single value
let arr = [1,2,3,4,5]

let ans = arr.reduce((accumulator, current)=>{
    accumulator = accumulator + current;
    return accumulator;
}, 0)

console.log(ans)