// Agenda:
// What is call back function?
// Writing a call back function
// Application of callback function

// In javaScript, a callback function is a function that is passed into another function as a argument. 
// This function can then be invoked at a later stage of time.
// Since, in JavaScript, function are objects, functions can be passed as arguments.


// Create a simple function 

function printFirstName(firstName, cb , cb1){
    console.log(`The first name is ${firstName}`)
    cb('Rogers')
    cb1('Andhra Pradesh', 'Vizag', '530008')
}

function printLastName(lastName){
    console.log(`The last name is ${lastName}`)
}

function address(state, city, pincode){

    console.log(`The address is: ${state}; ${city}; ${pincode}`)
}

printFirstName('Steve', printLastName, address)

// printLastName('Rogers')

console.log('---------Call back using arrow function----------- ')

const isEven = (n)=>{
      return n%2==0
      
}

let printResult = (evenFn, num)=>{
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is ${isNumEven}`)
}

printResult(isEven, 16)