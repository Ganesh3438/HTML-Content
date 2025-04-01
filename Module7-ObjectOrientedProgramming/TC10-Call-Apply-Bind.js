let person1 = {

    firstName: 'Adam',
    lastName: 'Rogers',
    age: 24,

    printDetails : function(){
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    }
    

}

let person2 = {

    firstName: 'Ricky',
    lastName: 'Pointing',
    age: 55,

    // printDetails : function(){
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }

}

// Call method
person1.printDetails.call(person2)

// person1.printDetails()
// person2.printDetails()


