let n = 12345;
let evenNum = 0;
let oddNum = 0
while(n>0){
    let rem = n % 10;
    if(rem%2==0){
      evenNum = evenNum + rem;
    }else{
        oddNum = oddNum + rem;
    }
    n = Math.floor(n/10)
}

console.log(`The sum of even number are: ${evenNum}`)
console.log(`The sum of odd number are: ${oddNum}`)