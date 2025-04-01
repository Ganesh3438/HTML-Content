let arr= [10,20,30,50];
let ans = new Array(arr.length+1);

let index = 3;
let value = 40;

for(let i=0; i<index; i++){
    ans[i] = arr[i]
    
}

ans[index] = value;

for(let i=index; i<arr.length; i++){
    ans[i+1] = arr[i];
}

for(let i=0; i<ans.length; i++){
    console.log(ans[i])
}