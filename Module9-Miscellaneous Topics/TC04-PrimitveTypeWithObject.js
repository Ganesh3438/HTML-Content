let firstName = {
    name: 'Tom',
    age: 33
}

let secondName = firstName;

secondName.name = 'Sam'

console.log(firstName);
console.log(secondName)