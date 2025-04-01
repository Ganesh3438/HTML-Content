let n = 12345;
let rem = n % 10;
console.log(`The last digit is: ${rem}`)

let fd = '';
while(n>0){
    let rem = n%10;
    fd = rem;
    n = Math.floor(n/10)
}

console.log(`The first digit is: ${fd}`)