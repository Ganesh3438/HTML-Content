let n = 153;
let rev = 0;
let temp = n;
while(n>0){
    let rem = n % 10;
    rev = rev + rem*rem*rem;
    n = Math.floor(n/10);
}

console.log(rev)

if(temp==rev){
    console.log('It is armstrong number')
}else{
    console.log('It is not an armstrong number')
}