let firstPerson= {
    name: 'Anil',
    age:38,

    address:{
        city: 'Hyd',
        state: 'Andhra'
    }
}

let secondPerson = {...firstPerson}

secondPerson.name = "Steve"

console.log(firstPerson)
console.log(secondPerson)