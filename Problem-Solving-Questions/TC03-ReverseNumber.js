let n = 123;
let temp = '';
while(n>0){
    let rem = n%10;
    // console.log(rem)
    temp = temp + rem;
    
    n = Math.floor(n/10);
}

console.log(temp)
