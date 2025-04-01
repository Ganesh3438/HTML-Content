// What is this keyword?
// This keyword is used to refer an object
// The value of this keyword will depend on how it was called. 

// 'use strict'

// let a = 2;
// console.log(a)  

// Test case 1:

// console.log(this); // -> This return an empty object

// ----------------------------------------------------------

// Test case 2: this inside a function

// function test(){
//     console.log(this);
// }

// test()

// ----------------------------------------------------------

// Test case 2: this keyword from a function inside an object

// let obj = {
    
//     name : 'Adam',
//     age: 21,

//     getThis: function(){
//         console.log(this);
//     },

//     gender: 'male'


// }

// obj.getThis()  // This will give you whole object details include functions
// o/p : { name: 'Adam', age: 21, getThis: [Function: getThis], gender: 'male' }

// -------------------------------------------------------
// test case 4: this keyword from a function that is inside a function inside an object
let obj2 = {
  
    name: 'Murali',
    age: 35,

    testFunction: function(){

       function g(){
        console.log(this);
       }
     
       g();
    }

}

// obj2.testFunction()