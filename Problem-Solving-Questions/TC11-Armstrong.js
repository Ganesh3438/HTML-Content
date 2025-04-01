let n = 153;

let temp = n;
let armNumber = 0;
while(n>0){
    
   let rem = n % 10;
   armNumber = armNumber + rem*rem*rem
   n = Math.floor(n/10)
}

// if(temp==armNumber){
//     console.log(`The number ${temp} is a armstrong number`)
// }else{
//     console.log(`The number ${temp} is not a armstrong number`)
// }

console.log(`The armstrong is: ${armNumber}`)

let res = temp.toString();
console.log(`The result is: ${res}`)

let original = armNumber.toString();
if(res===original){
    console.log(`The number ${res} is a armstrong number`)
}else{
    console.log(`The number ${res} is a armstrong number`)
}