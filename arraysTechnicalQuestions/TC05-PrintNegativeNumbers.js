let arr = [1,2,3,-1, 4, -2, 5, -3]

let ans = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
        ans.push(arr[i])
    }
}

console.log(ans)