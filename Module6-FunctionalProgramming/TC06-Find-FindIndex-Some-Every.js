// find is simple method which basically works as filter only but it doesn't return every element 
// that satisifies the condition, it just returns first element will encounter which  
// satisfy the condition

// In simple words Find returns the first element of an array that satisfy the condition
const transaction = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let firstWithDrawal = transaction.find(function(n){
    return n<0
})

console.log(firstWithDrawal)

// findIndex

let firstWithDrawalIndex = transaction.findIndex(function(n){
    return n<0
})

console.log(firstWithDrawalIndex)