let hello1 = "Hello 1";

let hello2 = "Hello 2";

// console.log(hello1);

// console.log(hello2);

// for(let i=0; i<10000000000; i++){

// }

// let hello3 = "Hello 3";
// console.log(hello3)

// Note : Above piece of code is in synchronous nature(Synchronous means the code will execute in line by line) 
// and by default javascript is a single threaded.

console.log("----------------------------Asynchronous-----------------------------------------------")


// Asynchronous approach:


let hello4 = "Hello 4";

let hello5 = "Hello 5";

console.log(hello4)
console.log(hello5)


setTimeout(()=>{
console.log("This is our asynchronous output....")
}, 1000)

let hello6 = "Hello 6";
console.log(hello6)