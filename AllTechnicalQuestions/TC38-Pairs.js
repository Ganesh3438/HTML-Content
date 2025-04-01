let arr = [1,2,3,4,5];
let k = 5;

for(let i=0; i<arr.length-1; i++){
    
for(let j=i+1; j<arr.length; j++){

    if(arr[i] + arr[j]==k){
        console.log(arr[i] + " "+ arr[j])
    }
}

}