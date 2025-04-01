let n = 12345;

let count = 0;

while(n>0){
    let rem = n %10;
    count = count + 1;
    n = Math.floor(n/10)
}

console.log(count)