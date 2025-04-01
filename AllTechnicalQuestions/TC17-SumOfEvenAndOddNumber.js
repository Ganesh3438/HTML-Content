let n = 123456;
let sumEven = 0;
let sumOdd = 0
while(n>0){
    let rem = n%10;
    if(rem%2==0){
     sumEven = sumEven + rem;
    }else{
        sumOdd = sumOdd + rem;
    }

    n = Math.floor(n/10)
}

console.log(sumEven);
console.log(sumOdd)