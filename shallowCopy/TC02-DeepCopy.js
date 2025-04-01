// Shallow Copy vs. Deep Copy:
// Shallow Copy: Copies only the first level of properties. Nested objects/arrays are shared between the original and copied object.
// Deep Copy: Creates a completely independent copy of the entire structure, including all nested objects/arrays. 
// Changes in the copied object do not affect the original.
// When to Use Shallow Copy:
// When you need a copy of the object or array but can work with shared references to nested objects.
// Shallow copy is faster than deep copy for large structures since it doesn't need to recursively copy nested objects.

let firstPerson = {
    name: 'Adam',
    age: 38,

    address:{
        city: 'Vizag',
        state: 'AP'
    }

}

let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.address.city = 'Vijaywada';

console.log(firstPerson)
console.log(secondPerson)