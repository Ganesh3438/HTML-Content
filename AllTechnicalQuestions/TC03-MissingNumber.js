let arr = [1,2,3,4,10];
let n = 10;
let ans = [];
for(let i=1; i<=n; i++){
   if(!arr.includes(i)){
    ans.push(i)
   }
}

console.log(`The missing number in the array are: ${ans}`)