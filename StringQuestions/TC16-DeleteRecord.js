let arr = [10,20,30,40,50,60];
let pos = 5;
let ans = new Array(arr.length-1);


for(let i=0; i<arr.length-1; i++){

    if(i<pos){
        ans[i] = arr[i]
    }else{
        ans[i] = arr[i+1];
    }
}

console.log(ans)