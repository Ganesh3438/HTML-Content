let arr = [10, 1, 20, 2, 30, 3, 1, 100, 15, 120, 200, 16, 176 ];

for(let i=0; i<arr.length-1; i++){
    
    let min = i;

    for(let j=i+1; j<arr.length; j++){

        if(arr[j]>arr[min]){
            min = j;
        }


    }

    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}

console.log(arr)
console.log(arr[2])