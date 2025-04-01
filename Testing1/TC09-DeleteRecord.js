let arr = [1,2,3,4,5,5,6];

let index = 5;

let ans = new Array(arr.length-1);

for(let i=0; i<arr.length-1; i++){
    if(i<index){
        ans[i] = arr[i];
    }else{
        ans[i] = arr[i+1];
    }
}

console.log(ans)