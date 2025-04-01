if(""){
    console.log("Truthy!"); // Won't execute ("" is falsy)
}

if("Hello"){
    console.log("Truthy!"); // Executes ("Hello" is truthy)
}

if (0) console.log("Truthy!"); // Won't execute (0 is falsy)
if (42) console.log("Truthy!"); // Executes (42 is truthy)