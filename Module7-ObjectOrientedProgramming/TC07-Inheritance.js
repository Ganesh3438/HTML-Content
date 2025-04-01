// Inheritance: There are two types of inheritance 
// 1. Classical inheritance
// 2. Prototype inheritance

// What is classical Inheritance?
// In simple words classical Inheritance is methods and properties from 
// base class can be passed into derived class.

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person{

    constructor(name, age, classStrength){
        super(name, age)
        this.classStrength = classStrength
    }
    
    test(){
        super.welcome()
    }

}

class student extends Person{

    constructor(name, age, cgpa){
        super(name, age)
        this.cgpa = cgpa
    }
}

let person1 = new Person('Adam', 23)
console.log(person1)

let teacher1 = new Teacher('Adam', 23, 100)
teacher1.test()

// console.log(teacher1)
