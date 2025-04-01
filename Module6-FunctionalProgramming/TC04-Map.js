// The map() function is a built-in method in JavaScript that is used to create a new array 
// by applying a function to each element of an existing array. 
// It does not modify the original array; instead, it returns a new array with transformed values.

let arr = [1, 2, 3, 4, 5]

let squareArr = [];

for(let i=0; i<arr.length; i++){

    squareArr.push(arr[i]*arr[i])

}

console.log(squareArr)

console.log('--------Using map function-----------')
let sqauareArray = arr.map(function(num){
    return num * num
})

console.log(sqauareArray)

console.log('---------Transaction example------------------')

let transaction = [100, 200, 300, 400, 500, 600, 700]
let currenyDollar = 80;

let res = transaction.map(function(amount){
    return amount /currenyDollar;
})

console.log(res)

let ans = transaction.forEach(function(amount){
 console.log(amount/currenyDollar)
})

console.log(ans)

console.log('----------Fetch only even numbers from the array------------')
let even = [1,2,3,4,5,6,7,8,9]

let fetchEvenNumbers = even.map(function(num){
    return num % 2==0;
})

console.log(fetchEvenNumbers)

