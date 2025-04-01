let myObj = {
    name: 'Adam',
    age: 27,
    gender: 'M'

}

// Destructuring Object
// This is incorrect.
// let {a, b , c} = myObj;

// We have to provide the key names
let {name, age, gender} = myObj;
console.log(name)
console.log(age)
console.log(gender)

// Alternative way of printing
let {name:n, age:a, gender:g} = myObj;
console.log(n)
console.log(a)
console.log(g)

console.log('---------------------Nested loop data----------------------------')

// For nested loop 
let person = {
    name: 'Adam',
    age: 27,
    gender: 'M',

    address:{
        country: 'India',
        state: 'Andhra',
        city: 'Vizag'
    }

}

// Destructuring the person object
let {name:n1, age:a1, gender:g1, address:{country:c1, state:s, city:c}} = person
// let {name, age, gender, address:{country, state, city}} = person
// console.log(name)
// console.log(country)

console.log(n1)
console.log(a1)
console.log(g1)
console.log(c1)
console.log(s)
console.log(c)

