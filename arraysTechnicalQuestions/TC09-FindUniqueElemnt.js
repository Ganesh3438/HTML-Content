let arr = [10, 20, 30, 40, 10, 20, 40, 50, 60, 70, 90]
let res = []
for(let i=0; i<arr.length; i++){
    
    let value = arr[i];
    let count = 0;

    for(let j=0; j<arr.length; j++){
        if(arr[j] == value){
            count++;
        }
    }

    if(count ==1){
        res.push(arr[i])
    }
}

console.log(res)