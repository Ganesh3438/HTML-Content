let arr = [1,2,3,4,5]
let arr1 = [6,7,8,9]

let ans = [arr.length + arr1.length];

let res = []

for(let i=0; i<arr.length; i++){
    ans[i] = arr[i]
}

for(let i=0; i<arr1.length; i++){
    ans[arr.length + i] = arr1[i]
}

for(let i=0; i<ans.length; i++){
    
    // console.log(ans[i])
     res.push(ans[i])
}

console.log(res)




