let printDetails = function(city, power){
console.log(`I am ${this.firstName} ${this.lastName} and I am ${this.age} year old and I am from ${city} and I have the ${power}`)
}


let person1 = {

    firstName: 'Adam',
    lastName: 'Rogers',
    age: 25,


}


let person2 = {

    firstName: 'Ricky',
    lastName: 'Pointing',
    age: 55,


}


// Call method
console.log('-----------------Call method-------------------')
printDetails.call(person2, 'Melbourne', 'Iron man Armour')

console.log('-----------------Apply method-------------------')

// Apply method
// Note: The difference between call and apply is, in call method we will pass the data as argument 
// but in apply method we will pass the data as an array.

printDetails.apply(person1, ['India', 'Power of God'])

// Bind
console.log('------------Bind---------------------------')
let myFun = printDetails.bind(person1, 'India', 'Super power')
// console.log(myFun)

myFun()

