console.log('---------Declarative way of writing---------')

let arr = [1,2,3,4,5]

let res = arr.reduce(function(acc, val){
    
    return acc = acc + val

}, 0)

console.log(res)

console.log('---------Imperative way of writing---------')

let sum = 0;

for(let i=0; i<arr.length; i++){

sum = sum + arr[i];

}

console.log(`The sum of the array is: ${sum}`)