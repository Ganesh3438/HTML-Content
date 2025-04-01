// We will be  given a number and we have to check that if the square of that number is even or not?

// Imperative way of writing the code
let a = 9;

if(a*a % 2==0){
    console.log('The number is even')
}else{
    console.log('The number is not an even')
}

console.log('------------------------------------')

// Declarative
const checkForSquare = (x)=>(x*x%2===0 ? true: false) 

console.log(checkForSquare(4))