class Animal {
  
    sound() {
    console.log(`Animal make different sounds`);
  }

}

class Dog {
  
    sound() {
    console.log(`Dogs barks`);
  }
  
}

class Cat {
  
    sound() {
    console.log(`Cat Mews`);
  }
  
}

let animal = new Animal();
animal.sound();


let tommy = new Dog()
tommy.sound()

let percy = new Cat()
percy.sound()