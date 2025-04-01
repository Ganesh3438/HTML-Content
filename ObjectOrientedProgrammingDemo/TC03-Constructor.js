function createCar(_name, _company, _color){
    this.name = _name
    this.company = _company
    this.color = _color

    this.drive = function(){
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }

}

let car = new createCar('Benz', 'Benz Advanced-1210', 'Shiny Black')
let car1 = new createCar('Benz1', 'Benz Advanced-12101', 'Shiny Black1')

console.log(car)
console.log(car1)

car.drive()