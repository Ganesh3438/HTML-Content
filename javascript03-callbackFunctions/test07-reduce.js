let myArr = [1, 2, 3, 4, 5]

// Calculate the sum of the elements in array.

let ans = myArr.reduce(function(acc, val){

     acc = acc + val;
     return acc;
} , 0 )

console.log(ans)



