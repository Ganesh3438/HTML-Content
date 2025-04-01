// Inheritance is nothing inheriting base class properties and method into 
// child class is know inheritance.

export class Parent{
    
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}