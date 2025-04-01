let arr = [1,2,4,5,6]
let pos = 2;
let value = 3;

let ans = new Array(arr.length+1)

for(let i=0; i<pos; i++){
    ans[i] = arr[i]
}

// let arr[position] = value;
ans[pos] = value;

for(let i=pos; i<arr.length; i++){
    ans[i+1] = arr[i];
    
}

console.log(ans.join(" "))
