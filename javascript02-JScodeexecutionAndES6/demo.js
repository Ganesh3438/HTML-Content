// let foodMenu = ['chicken biryani', 'Mutton biryani', 'Prawans biryani']
// console.log(foodMenu)

// // Adding another item in the end of an array using push method
// foodMenu.push('Neli ghost biryani')
// console.log(foodMenu)

// // If you want to remove last element in an array we can use pop method
// foodMenu.pop()
// console.log(foodMenu)

// // If we want to add element in first place we need to use shift method
// foodMenu.unshift('Neli ghost biryani')
// console.log(foodMenu)

// // shift 
// foodMenu.shift()
// console.log(foodMenu)

// let arr = [10, 20, 30, 40, 50]


// for(let i=arr.length-1; i>=0; i--){
//  console.log(arr[i])
// }

// let min = arr[0];
// let max = arr[0];

// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//      max = arr[i]
//     }

//     if(min > arr[i]){
//         min = arr[i]
//     }
// }

// console.log('Min: '+ min)
// console.log('Max: '+ max)

// let arr = [10, 20, 30, 40, 50]
// let index = 3;
// let value = 25;

// let n = arr.length;
// console.log('The length of the array is:'+ n)
// let ans = [n+1];

// for(let i=0; i<index; i++){
//     ans[i] = arr[i];
// }

// ans[index] = value;

// for(let i=index; i<n; i++){
//     ans[i+1] = arr[i];
// }



// for(let i=0; i<ans.length; i++) {
//     console.log(ans[i] +  " ");
// }

// ---------------------------------------------------------------

let myArray = [1,2,3,4,5]

function calculate(radius, cb){
let result = [];
for(let i=0; i<radius.length; i++){
    result.push(cb(radius[i]))
}
return result;
}

function calculateArea(radius){
    return 3.14*radius*radius;
}

let finalResult = calculate(myArray, calculateArea)
console.log(finalResult)






