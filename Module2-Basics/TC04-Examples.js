let arr = [1, 2, 3, 4, 5];

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// using for each

arr.forEach((value, index)=>{
    console.log(index + ":"+ value)
})


// map
// The map() function is an array method that creates a new array by applying a transformation 
// (or callback function) to each element in the original array. It iterates over each element of the array 
// numbers and applies the transformation n => n * 2 to each element.

let doubled = arr.map(n=>n*2);
console.log(doubled)