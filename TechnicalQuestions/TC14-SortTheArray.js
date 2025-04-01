let arr = [10, 20, 100, 15, 2, 300, 1, 5, 600];

for(let i=0; i<arr.length-1; i++){

    let min = i;

    for(let j=i+1; j<arr.length; j++){

        if(arr[j]>arr[min]){
            min = j;
        }

    }

    let temp = arr[min]
    arr[min] = arr[i];
    arr[i] = temp;
}

let ans = [];

for(let i=0; i<arr.length; i++){
    // console.log(arr[i] +  " ");
    ans.push(arr[i]);
}

console.log(ans.join(" "))

console.log('-----------------------------------------------------')

console.log(arr[2])