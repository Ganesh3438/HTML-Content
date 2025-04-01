let arr = [1,2,3,4,6]
let index = 4
let value = 5;


let ans = [arr.length+1]
for(i=0; i<index; i++){

    ans[i] = arr[i]
}

ans[index] = value;

for(let i=index; i<arr.length; i++){
    ans[i+1] = arr[i]
}

console.log(ans)