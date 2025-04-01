// In JavaScript, the this keyword refers to the object that is currently 
// executing the function. Its value depends on how and where the function is called.

// There are four cases for "this" keyword

// 1. console.log(this) // Empty object
// 2. inside fn // Global object
// 3. obj->fn  // Object itself
// 4. onj->fn->fn // Global object

// 1. 
console.log(this) // you will get a empty object

// 2. Under function we are declaring the this keyword
function displayThis(){
    console.log(this)
}

// displayThis() // this keyword will always refer to global object.

// 3. obj-->function

let myObj = {
    
    name: 'Anil',
    age: 38,

   myFn: function(){
    console.log(this.name)
   }

    
}  

// myObj.myFn()  // 

// 4. obj->Fn->Fn

let myObj2 ={
    name: 'Chandu',
    age: 29,

    myFn2: function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()
    }
}

myObj2.myFn2()  // It refers to global object

