let arr = [1,2,3,4,5,3,89,4,3,1,6,7,8]

let fi = -1;
let li = -1;

let val = 3;
let ans = [];

for(let i=0; i<arr.length; i++){

    if(arr[i]==val){
        fi = i;
        
        break;
        
    }
}

for(let i=arr.length-1; i>0; i--){
    if(arr[i]==val){
        li = i
        
        break;
    }
}

console.log(`First Element index is: ${fi}`)
console.log(`Last Element index is: ${li}`)