var a = 20;
console.log(a);

var b = 'Welcome to javascript !!'
console.log(b);

var c = true;
console.log(c);

// In javascript does not cares abour data type initialization for your variables. These 
// type of langauges are know as Losely typed langauges(javascript)
// Strictly types language ---> Java, C++



// Dynamically typed langauge:
console.log("-------Dynamically typed langauge:----------------")
var x = true;
console.log(x);

// Declaring with same variable even though it will not throw error.
var x = false;
console.log(x);

// You can assign values to any variable anytime anywhere with the same name 
// and it will work.

// If you execute whole code of dynamical typed lanaguage it will give us both true and false but if you try to
// execute in any other language it will throw an error that variable x exist with 
// same name already


// Problems of var keyword:
console.log('--------Problems/disadvantage of var keyword----------');

// It allow redeclaration of your variables. To avoid this problem they have 
// introduced ES6.
// What is ES6? ES stands for Ecma script
// Ecma script(ES) is basically a standard that is defined to write javascript code.
// Ecma script introduced two new keywords let and const

let p = 'Vizag';
console.log(p);

// let p = 'Mumbai';
// console.log(p);

p = 'Banglore';
console.log(p);

// Note: You can reinitialize the variable but cannot redeclare the variable 
// using let keyword
