class Person{

constructor(name, age, gender){
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
}

// protype method
hello(){
    console.log(`${this.Name} says hello`)
}

// ststic method
static staticHello(){
    console.log('Static method say hello')
}


}

let person1 =new Person('Adam', 21, 'male');
// let person2 =new Person('Tom', 22, 'male');

console.log(person1)
person1.hello()

// calling the static method\
Person.staticHello()


