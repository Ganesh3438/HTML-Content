let arr = [1,2,2,3,5,4,5,3,5]

let b = 5;
let count = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] == b){
        count++;
    }
}

console.log(`The count of number in the array is: ${count}`)