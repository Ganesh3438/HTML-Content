let num = 9;
let temp = 0;
for(let i=1; i<=num; i++){

    if(num%i==0){
      temp++;
    }

}

if(temp<=2){
    console.log('It is a prime number')
}else{
    console.log('It is not a prime number')
}