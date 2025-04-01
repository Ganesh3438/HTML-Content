// Agenda
// What is pure function?
// What is impure function?
// Side effects in pure function


//  Pure function: is a function which 
// . Given the same input, always returns the same output.
// . Produces no side effects.

var a = 12;

// Impure function 
function add(x){
    console.log(x+a);
    a++;
    
}

add(2)


