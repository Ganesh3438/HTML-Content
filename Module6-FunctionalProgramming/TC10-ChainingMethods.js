// Question: From the transaction array filter out positive elements and calculate the total amount 
// use filter and reduce to achieve this.

const transaction = [1000, 3000, 4000, 2000, -898, 3800, -4500]
let res = transaction.filter(function(num){
    return num>0
}).reduce(function(acc,val){

return acc = acc + val;

}, 0)

console.log(res)
