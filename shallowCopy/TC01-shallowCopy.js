let firstPerson = {
    name: 'Adam',
    age: 38,

    address:{
        city: 'Vizag',
        state: 'AP'
    }

}

let secondPerson = {...firstPerson}

secondPerson.name = 'Steve'
secondPerson.address.city = 'Vijayawada'

console.log(firstPerson)
console.log(secondPerson)