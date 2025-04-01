let arr= [1,2,3,4,5,6]
let k = 3;
let n = arr.length;
k = k%n;

for(let i=k; i<n; i++){
    process.stdout.write(arr[i] + " ")
}

for(let i=0; i<k; i++){
    process.stdout.write(arr[i] + " ")
}