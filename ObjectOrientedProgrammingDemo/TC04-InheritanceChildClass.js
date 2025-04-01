import {Parent} from "./TC04-InheritanceParentClass.js"

export class Child extends Parent{

    constructor(name, age){
        super(name); // call the parent class constructor
        this.age = age;
    }

    showAge() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    greetParent() {
        super.greet(); // Calling the Parent class method
    }

}

// export {Child}; // Export the Child class