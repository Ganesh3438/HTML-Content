import {Child} from "./TC04-InheritanceChildClass.js"

const childObj = new Child('John', 25)

childObj.greetParent(); // Calls Parent's greet() method
childObj.showAge(); // Calls Child's own method

