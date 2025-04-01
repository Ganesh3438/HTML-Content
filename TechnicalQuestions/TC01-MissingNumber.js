let number = [1,2,4,5,6];

let n = number.length+1;
let expectedSum = (n*(n+1)/2)
let actualSum = number.reduce((sum, num)=> sum+num, 0)
let res = expectedSum - actualSum;
console.log(res)
