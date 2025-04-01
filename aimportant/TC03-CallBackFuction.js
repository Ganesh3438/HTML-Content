function firstName(name, cb, cb1){
    console.log(name);
    cb("Smith");
    cb1("Aus", "Melboure", 112345);
}

function lastName(lastName){
    console.log(lastName)
}

function address(country, state, pincode){
  console.log(country, state, pincode)
}

firstName("James", lastName, address)

//--------------------------------------------------------------

let isEven = (n)=>{
return n % 2==0
}

let printEven = (even, num)=>{
    let res = even(num)
    console.log(`The number is ${res}`)
}

printEven(isEven, 16)