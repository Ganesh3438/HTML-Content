let arr = [1,2,3,5,6];
let index = 3;
let value = 4;

let ans = new Array(arr.length+1);

for(let i=0; i<index; i++){
ans[i] = arr[i];
}

ans[index] = value;

for(let i=index; i<arr.length; i++){
    ans[i+1] = arr[i];
}

console.log(ans)