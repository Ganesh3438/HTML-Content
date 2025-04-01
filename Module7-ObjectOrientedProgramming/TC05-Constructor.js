// Constructor: In simple words it is template
// A constructor function is a special function used to create objects. 
// It allows us to reuse the same structure to create multiple objects with different values.

function createCar(_name, _company, _color) {
  this.name = _name;
  this.company = _company;
  this.color = _color;

  this.drive = function(){
    console.log(`I am driving ${this.name} and it is of ${this.color} color`)
  }
}



let car1 = new createCar("X4", "BMW", "Red");

console.log(car1.name)
console.log(car1.company)
console.log(car1.color)

car1.drive()
