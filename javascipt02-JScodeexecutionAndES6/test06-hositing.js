// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their scope before code execution. 

// Temporal dead zone: When you declare a variable with let or const 
// so these variable will not be acccessible before their initialization and at this 
// moment they will be in a temporal dead zone. 

// Note: var will not go to temporal dead zone it will be declare as undefined.
// let and const will go to temporal dead zone

console.log(a);
console.log(b);
console.log(c);
printName()
printAge()
// console.log(c);

var a = 4;
let c = 5;

function printName(){
    console.log('My name is Ganesh');
}

let printAge = function(){
    console.log(24)
}

var b = 10;
