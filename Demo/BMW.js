// import Car from "./Test.js"
const Car = require('./Test.js') 

class BMW extends Car{

helloBMW(){
    console.log('I am in BMW class')
}

speed(){
    console.log('I am from BMW class')
   }



}


module.exports = BMW;


// const demo = require('./Test.js')

// console.log(demo.a, demo.b)