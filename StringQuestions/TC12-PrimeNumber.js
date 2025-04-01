for(let i=1; i<=10; i++){
    let temp = 0;
    for(let j=2; j<i-1; j++){
        if(i%j==0){
            temp++;
        }
    }

    if(temp==0){
        console.log(i)
    }
}

console.log('----------------------------------')

let arr = [16, 19, 10, 15, 100, 200, 150, 300, 3, 30, 5, -1, 6, 7, 2];

for(let i=0; i<arr.length-1; i++){

    let min = i;

    for(let j=i+1; j<arr.length; j++){

     if(arr[j]>arr[min]){
        min = j;
     }

    }
   let temp = arr[min];
   arr[min]= arr[i];
   arr[i] = temp;

}

// for(let k=0; k<arr.length; k++){
//     console.log(arr[k])
// }

console.log(arr[3])