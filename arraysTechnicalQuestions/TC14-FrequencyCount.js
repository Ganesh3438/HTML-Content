let arr = [1, 2, 3, 2, 4, 1, 6];
let ans = []
for(let i=0; i<arr.length; i++){
    
    let value = arr[i];
    let count = 0;

for(let j=0; j<arr.length; j++){

    if(arr[j]==value){
        count++;
    }

}

ans.push(count)

}

console.log(ans)