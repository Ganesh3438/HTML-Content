// Map: Map method is used when you want to do some operation with your array
// element. it will not the chaange the original array

let myArr = [1, 2, 3, 4, 5];


// function squareArr(arr){

//     let squareArr = [];

//     for(let i=0; i<arr.length; i++){
    
//         squareArr.push(arr[i] * arr[i])
//     }

//     return squareArr;

// }

// let ans = squareArr(array);
// console.log(ans)

let squaredValues = myArr.map(function(num){

    return num * num
    // return  3.14 * num * num;
})

console.log(squaredValues)

// Example: Covert rupees to dollar
// 1000 rupees = 12.5

let transcation = [1000, 3000, 4000, 2000, -898, 3800, -4500]
let currentDollarRate = 80;

let ans = transcation.map(function(amount){
 
    return amount/currentDollarRate

})

console.log(ans)