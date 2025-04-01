let firstPerson = {
    name: 'Ajay',
    age:26,

    address: {
        city: 'srikakulam',
        state: 'hyd'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))

secondPerson.address.state="Andhra"

console.log(firstPerson)
console.log(secondPerson)