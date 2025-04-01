let arr = [1,2,3,4,6];
let index =4;
let value = 5;
let count = arr.length+1
let ans = new Array(count);

for(let i=0; i<index; i++){

   ans[i]= arr[i];

}

ans[index] = value;

for(let i=index; i<arr.length; i++){
    ans[i+1] = arr[i];
}

for(let i=0; i<ans.length; i++){
    process.stdout.write(ans[i] + " ");
}