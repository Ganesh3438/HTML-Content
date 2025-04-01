// In build js array method
var arr = [12, 14, 1, 56, 48];

// pop method means will delete the last record from the array
arr.pop()
console.log(arr)


// push method means will add element at the end of the array
arr.push(100);
console.log(arr)

// Shift method will remove a first element 
var d = arr.shift()
console.log(`Remove first element in an array ${d}`)
console.log(arr)

// unshift will add the value at the starting of the array
arr.unshift(102)
console.log(arr)
