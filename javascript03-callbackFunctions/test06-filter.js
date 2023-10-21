// Filter: Filter is higher order function based on a condition and will only
// have the value inside the array for which the condition is satisfied.

let myArr = [1, 2, 5, 7, 8, 2, 6, 9, 13, 17]

let ans = myArr.filter(function(num){
    return num%2==0
})

console.log(ans)



