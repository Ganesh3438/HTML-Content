'use strict'

// 1. 
// console.log(this)  // The output will be the empty object

// 2. 
function displaythisWithStrictMode(){
    console.log(this)   // The output will be undefined
}

displaythisWithStrictMode()

// 3. 
// let myObj = {
//     name: 'Mrinial',
//     age: 24,

//     myfn: function(){
//         console.log(this.name)
//     }
// }

// // myObj.myfn()


// // 4.

// let myObj2 = {
//     name: 'Mrinial',
//     age: 24,

//     myfn1: function(){
//         function test(){
//             console.log(this)
//         }
//         test()
//     }
// }

// myObj2.myfn1()  // The output will be undefined