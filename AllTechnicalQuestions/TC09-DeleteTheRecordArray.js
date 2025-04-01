let arr = [1,2,3,6,4,5];
let index = 3;

let ans = [arr.length-1];

for(let i=0; i<arr.length-1; i++){
    if(i<index){
        ans[i] = arr[i];
    }else{
        ans[i] = arr[i+1];
    }
}

console.log(ans)