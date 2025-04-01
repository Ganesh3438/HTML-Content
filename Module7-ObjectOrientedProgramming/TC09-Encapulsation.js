function Person(name, age){

var name = name;
this.age = age;

this.getName = function(){
    return name
}

}

let person1 = new Person('Adam', 19)
console.log(person1.getName())

