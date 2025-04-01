let arr = [10, 20, 30, 10, 12, 10];

let ans = [];

for(let i=0; i<arr.length; i++){

    let val = arr[i]
    let freq = 0;

    for(let j=0; j<arr.length; j++){

        if(arr[j]==val){
          freq++
        }

    }
    if(freq==1){
    ans.push(arr[i])
    }
}

console.log(ans)