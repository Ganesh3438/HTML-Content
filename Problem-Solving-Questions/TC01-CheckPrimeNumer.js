let n = 5;

let count = 0;

for(let i=1; i<=10; i++){
    if(n%i==0){
        count = count + 1;
    }
}

if(count<=2){
console.log(`${n} is a prime number`)
}else{
    console.log(`${n} is not a prime number`)
}