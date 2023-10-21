// Functions: are abstract bodies defined clearly to do a specific kind of task

// Create a beverage vending machine

function serveBeverage(quantity, drink){
    console.log('I want '+quantity + " "+ drink)
}

 serveBeverage(4, 'Tea');


// Function can be written as a expressions (first class citiziens)
// function storing in a variable
console.log('-----------Function storing in a variable and calling that variable as a function------------')
let sayHi = function(){
    console.log('Ganesh say hi');
}

//calling the function with the name of variable 
sayHi()

// Arrow function
console.log('----------Uisng arrow function calling the method--------------------')
let arrowFunctionExpression = ()=>{
 
    console.log('Ganesh say bye')
}

arrowFunctionExpression()


// Notes: We have three types of functions in JS
// 1. Traditional function 
// Example: 
console.log('--------------Type 1: Traditional function-----------------')
function sum(a, b){
    console.log('The sum of two parameters are:'+ (a+b));
}
sum(10, 15);

// 2. Storing function into varaible
// Example
console.log('--------------Type 2: Storing function into variable and calling-----')
let multipleNumbers = function(c, d){
  console.log('Muliplicaion of two numbers are:' + (c*d))
}
multipleNumbers(10, 2);

// 3. Arrow function
console.log('--------------Type 3: Using arrow function and calling-----')
let division = (m, n)=>{
console.log('Division of two numbers are:'+ (m/n));
}
division(10, 5)

// console.log()
// console.log('-----------Testing----------------------')
// let testData = function(a, b){
//     let sum = a + b;
//     return sum;
// }

// let result = testData(9, 1);
// console.log(result);