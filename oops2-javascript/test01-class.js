// Class: Out of class you can create multiple objects, that those objects should have 
// the same properties.

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

let person2 = new Person('James', 29, 'male');
console.log(person2)

person1.hello()
person2.hello()

Person.staticHello()

