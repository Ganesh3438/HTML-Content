// Functional programming

// procedural programming paradigm ---> C
// object oriented paradigm ---> Java C++
// Functional programming paradigm --->  Javascript

// 1. call back function : These are the function that can be passed to 
// another function as an argument is called call back function..

function printName(cb){
    console.log('Mohan')
    cb()
}

// Another function
function printLastName(){
    console.log('Kumar')
}

function printAge(){
    console.log(26);
}

printName(printLastName)
console.log('----------------------')
printName(printAge);

// We can pass multiple call back functions at a time. 
// Please find the below example
console.log('--------multiple call back functions at a time--------------')
function personDetails(cb, cb1, cb2, idNo){
  console.log('Shiva')
  cb()
  cb1()
  cb2()
  console.log(idNo)
  
}

function phoneNumber(){
    console.log('1234567891');
}

function address(){
    console.log('Vizag');
}

function iDProof(){
    console.log('Pan card');
}

personDetails(phoneNumber, address, iDProof, 10);
