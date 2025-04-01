let n = 12345;
let ld = n%10;
let fd = 0;
while(n>0){
    
    let rem = n %10;
    fd = rem;
    n = Math.floor(n/10);

}

console.log(ld)
console.log(fd)