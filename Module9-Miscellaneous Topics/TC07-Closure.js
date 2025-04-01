// Lexical scope: That a function define inside a function will always have an access to its 
// outer scope is know as Lexical scope.


// In JavaScript, a closure is a function that has access to the variables and parameters of its 
// outer function,
// even after the outer function has finished executing. Closures are created when a function is
// created. 

function test(){
    let a = 2;

    function test1(){

        console.log(a)

    }

    return test1;
}

let fun = test()
// console.log(fun)
fun()


