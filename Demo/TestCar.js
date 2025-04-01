const BMW = require('./BMW.js') 

class Demo extends BMW{

//  demo = new Demo();

}

// const Car = new BMW();
// Car.speed()


const obj = new Demo()
obj.speed();
obj.test();
obj.helloBMW()
obj.usernameDetails("Mohan")
// console.log(obj.username)
let value = obj.username;
console.log(value)
// console.log(obj.speed());


