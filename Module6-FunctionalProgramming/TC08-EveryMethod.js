// every 
// every method check every element and it would satisfy then only it will return true.

const transaction = [1000, 2000, 3000, 4000, 5000]

let resultEvery = transaction.every(function(n){
    return n>0
})

console.log(resultEvery)


