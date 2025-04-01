let num = [1,2,3,4,5,6];
let even = 0;
let odd = 0;
for(let i=0; i<num.length; i++){

    if(i%2==0){
        even = even + num[i]
    }else{
        odd = odd + num[i]
    }
}

console.log(`Sum of even number is: ${even} and sum of odd number is ${odd}`)