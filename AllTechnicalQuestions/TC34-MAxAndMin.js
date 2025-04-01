let arr = [1,2,3,4,5];

let minValue = arr[0];
let maxValue = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i]>maxValue){
        maxValue = arr[i]
    }

    if(arr[i]<minValue){
        minValue = arr[i]
    }
}

console.log(maxValue)
console.log(minValue)