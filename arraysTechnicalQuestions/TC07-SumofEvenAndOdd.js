let arr = [1,2,3,4,5,6]

let evenSum = 0;
let oddSum = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] % 2==0){
        evenSum = evenSum + arr[i]
    }else{
        oddSum = oddSum + arr[i]
    }
}

console.log(`The sum of even number is: ${evenSum}`)
console.log(`The sum of odd number is: ${oddSum}`)