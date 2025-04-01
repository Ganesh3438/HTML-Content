let n = 121;
let temp = n;
let rev = 0;
while(n>0){
    let rem = n%10;
    rev = rev*10+rem;
    n = Math.floor(n/10);
}

if(temp===rev){
    console.log('It is an palindrome')
}else{
    console.log('It is not an palindrome')
}