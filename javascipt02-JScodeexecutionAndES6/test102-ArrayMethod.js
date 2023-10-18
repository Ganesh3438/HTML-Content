// Push method:
let cars = ['Urus', 'Swift', 'BMW', 'Audi'];
console.log(cars)

// Add the car at the end of the array
console.log('---------Using PUSH method we can add the value at the end of the array----------')
cars.push('Honda city');
console.log(cars)



// Pop method
// pop method will remove the array element from the end of the arrray
// As soon we use pop method it will delete the last element from the array
console.log('-----------pop method--------------------')
cars.pop()
console.log(cars)


// We can store into one variable. Please the below piece of code 
console.log('-------------------------------------')
var removedElement = cars.pop()
console.log(cars)

// unshift method:
// This method is used to add an Element at the starting index of an array
console.log()
console.log('-------unshift method: is used to add an Element at the starting index of an array---------')
cars.unshift('Benz');
console.log(cars);


// shift method:
// This method is used to remove an Element at the starting index of an array
console.log()
console.log('-------shift method: is used to remove an Element at the starting index of an array---------')
cars.shift()
console.log(cars);



