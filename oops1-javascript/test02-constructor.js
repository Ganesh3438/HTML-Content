function car(nameParam, colorParam, topSpeedParam){
    this.name = nameParam;
    this.color = colorParam;
    this.topSpeed = topSpeedParam;
} 

let car1 = new car("Ferrai", "Red", '1000 km/hr');
console.log(car1)

let car2 = new car("Range rover", "Black", '1000 km/hr');
console.log(car2)
