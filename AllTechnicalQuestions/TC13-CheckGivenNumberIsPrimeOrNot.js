let n = 15;
let count = 0;
for(let i=1; i<=n ; i++){

    if(n%i==0){
        count++;
    }
}

if(count==2){
    console.log('It is prime number')
}else{
    console.log('It is not a prime number')
}