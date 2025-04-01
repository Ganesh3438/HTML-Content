let arr = [1,2,4,3,6,3,7,8,9,4,5,6,7,1,2,3,45,746,123];
let value = 3;
let ans = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]==value){
     ans.push(i)
    }
}

console.log(ans)
