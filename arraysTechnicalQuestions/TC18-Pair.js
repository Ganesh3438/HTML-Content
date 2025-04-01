let arr=[1,2,3,4,5];

let num = 5;
// let pairs = [];
for(let i=0; i<arr.length-1; i++){

for(let j=i+1; j<arr.length; j++ ){

    if(arr[i]+arr[j]==num){
        //  pairs.push([arr[i], arr[j]])
        console.log(arr[i]+ " "+ arr[j])
    }

}

}

// console.log(pairs)