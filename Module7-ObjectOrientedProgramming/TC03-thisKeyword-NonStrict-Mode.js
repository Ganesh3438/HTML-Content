// What is this keyword?
// This keyword is used to refer an object
// The value of this keyword will depend on how it was called. 

// Note: 'this' keyword will work on two environment one is on Node and another one is browser
// with two different mode call strict and non-strict modes.

// Lets work on non-srict mode. If you print this keyword it will get output as empty object. 
// Please find the below following code.


// 1. 
// console.log(this)   // Receive an empty object in non strict mode

// 2. When ever we are working under function with this keyword a global object will be get execute.

// function displayThis(){
//     console.log(this)
// }

// displayThis() // we will get a global object

// 3. Working with an object
// Referering to that particular object only. 
// let myObj = {
//     name: 'Mrinal',
//     age:  24,

//     myFn: function(){
//         console.log(this.name)
//     }
// }

// myObj.myFn() // output will be Mrinial

// 4
// let myObj2 = {
//     name: 'Mrinal',
//     age:  24,

//     myFn2: function(){
//         function myfn3(){
//             console.log(this)
//         }
//          myfn3()
//     }
// }


// myObj2.myFn2() // We will get global object 