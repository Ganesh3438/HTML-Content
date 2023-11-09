let person = {

name: "Adam",
age: 25,
gender: "Male"


}

console.log(person)

// let isValid = person.hasOwnProperty('name');
// console.log(isValid)

// Protype: When ever we create an obj a prototype is attached from which you will 
// be able to use all the inbuild propertiesand methods.

function Car(carname, carColor){
  
    this.CarName = carname;
    this.carColor = carColor;
}

let car1 = new Car("Audi", "Red");
let car2 = new Car("BMW", "white");

console.log(car1);
console.log(car2);