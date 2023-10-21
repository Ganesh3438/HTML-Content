
// We can pass multiple call back functions at a time. 
// Please find the below example

// function printName(cb1, cb2, cb2, num){
//     console.log('Mohan')
//     cb1()
//     cb2()
//     cb3()
//     console.log(num)
// }

// // Another function
// function printLastName(callbackfn1){
//     console.log('Kumar')
//     callbackfn1()
// }

// function printAge(){
//     console.log(26);
// }

// function printRandomNumber(){
//     console.log(26);
// }

// function panCardDetails(){
//     console.log('AP12345');
// }

// printName(printLastName(printRandomNumber), printAge, panCardDetails, 10)


function personDetails(cb, cb1, cb2, idNo){
    console.log('Shiva')
    cb()
    cb1()
    cb2()
    console.log(idNo)
    
  }
  
  function phoneNumber(callbackFn){
      console.log('Phone');
      callbackFn()
  }
  
  function address(){
      console.log('Vizag');
  }
  
  function iDProof(){
      console.log('Pan card');
  }
  
function printAnyrandomNumber(){
    console.log('3')
}

  personDetails(phoneNumber(printAnyrandomNumber), address, iDProof, 10);
  
