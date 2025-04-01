let n = 12;
let temp = 0;
for(let i=1; i<=n; i++){
    if(n%i==0){
        temp++;
    }
}
console.log(temp)
if(temp <=2){
    console.log('It is prime Number')
}else{
    console.log('It is not a prime number')
}