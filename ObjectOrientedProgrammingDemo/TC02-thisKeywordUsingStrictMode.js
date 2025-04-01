'use strict';

// 1. 
console.log(this)  // empty object

// 2

function test(){
    console.log(this)
}

test()  // undefined

// 3

let myObj = {

    name: 'Shiva',
    age: 33,

    myFn: function(){
        console.log(this.name)
    }

}

myObj.myFn()  // Shiva


// 4

let myObj2 = {
    name: 'Chandu',
    age: 29,

    myFn2: function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()
    }
}

myObj2.myFn2()  // undefined