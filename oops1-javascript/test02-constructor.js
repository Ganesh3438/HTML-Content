// Constructor: Constructor function is a basically blue print and we can use 
// that particular function to create multiple objects which will have same kind 
// of property. 

function Car(nameParam, colorParam, topSpeedParam){
    this.name = nameParam;
    this.color = colorParam;
    this.topSpeed = topSpeedParam;
} 

let car1 = new Car("Ferrai", "Red", '1000 km/hr');
console.log(car1)

let car2 = new Car("Range rover", "Black", '1000 km/hr');
console.log(car2)
