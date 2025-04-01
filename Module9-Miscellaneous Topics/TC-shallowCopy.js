let person = {

    name: 'Shiva',
    age: 33,

    address:{
        city: 'Vizag',
        state: 'Andhra Pradesh'
    }
}

let person2 = {...person}
console.log(person2)

console.log('-----------------------------------')

person2.name='Anil'
person2.city='Vijayawada'
console.log(person)
console.log(person2)