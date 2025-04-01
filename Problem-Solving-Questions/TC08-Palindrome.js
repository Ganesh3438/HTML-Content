let n = 121;

let temp = n;
let reverseNumber = ''
for(; n>0; ){
    let rem = n % 10;
    reverseNumber = reverseNumber + rem;
    n = Math.floor(n/10)
}

reverseNumber = reverseNumber.toString()
let originalNumberStr = temp.toString();

console.log(`After reversing number is:  ${reverseNumber}`)

if(reverseNumber===originalNumberStr){
    console.log(`The number ${temp} is a palindrome`)
}else{
    console.log(`The number ${temp} is not a palindrome`)
}




