let arr = [1,2,3,4,0,6,7,0,12,0,15];
let arr1 = [25, 35, 45];
let j=0;
for(let i=0; i<arr.length && j<arr1.length; i++){
    if(arr[i]==0){
       arr[i] = arr1[j]
       j++;
    }
}

console.log(arr)

