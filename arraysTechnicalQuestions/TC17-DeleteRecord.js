let arr = [1,2,3,4,6,5]
let index = 4;
let value = 6;

let ans = [arr.length-1]
for(let i=0; i<index; i++){
    ans[i] = arr[i]
}

// ans[index] = value;
for(let i=index+1; i<arr.length; i++){
    ans[i-1] = arr[i]
}

console.log(ans)
