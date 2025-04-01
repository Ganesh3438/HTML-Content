let n = 123;
let count = 0;
while(n>0){
    let rem = n % 10;
    count++;
    n = Math.floor(n/10)
}
console.log(count)