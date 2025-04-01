let n = 153;
let temp = n;
let res=0;
while(n>0){
    let rem = n % 10;
    res = res + rem*rem*rem;
    n = Math.floor(n / 10);
}

if(temp === res){
    console.log('It is an armstrong number')
}else{
    console.log('It is not an armstrong number')
}
