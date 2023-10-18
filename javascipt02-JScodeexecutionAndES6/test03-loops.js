let arr = [1, 2, 3, 4, 5]

let sqaure = []

for(let i=0; i<arr.length; i++){

// console.log(arr[i] * arr[i]);
sqaure.push(arr[i]*arr[i]);

}

console.log(sqaure)


console.log('-------------------Reverse an array -----------------------')

for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
}