let captainAmerica= {

    name: 'Steve Rogers',
    age: 102,
    allies:['Tony', 'bruce', 'bucky'],

    sayHi: function(){
        console.log('Captain says hi')
    },

    address: {

        Country: 'USA',
        city: {
            name: 'Brooklyn',
            pincode: 12345
        },

       

    },
    IsAvenger: true

}

console.log(captainAmerica.age)
console.log(captainAmerica.allies[1])
console.log(captainAmerica.address)
console.log(captainAmerica.address.city.name)

console.log('--------------------')
captainAmerica.IsAvenger = false
console.log(captainAmerica)
captainAmerica.movies = ['End Game', 'Age of Ultron', 'Civil War']
console.log(captainAmerica)

captainAmerica.allies.unshift('Hello')
captainAmerica.address.city.telephone = "12234567891";

console.log('-------------------------------')
console.log(captainAmerica)

captainAmerica.sayHi()

console.log('-------------------------------')

delete captainAmerica.age
console.log(captainAmerica)