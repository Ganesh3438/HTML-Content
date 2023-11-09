// Inheritance: The process of taking some properties which can be re-used 
// from a parent class is known as inheritance.

class Person {

    constructor(name, age, gender) {
        // console.log('This is my Person class constructor')
        this.Name = name
        this.Age = age
        this.Gender = gender

    }

// The below method is called proto type method
    hello() {
        console.log(`${this.Name} says hello`)
    }

    // Static method
    static staticHello(){
        console.log('Static method says hello')
    }

}

let person1 = new Person('Adam', 26, 'male');
console.log(person1)
