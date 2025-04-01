// Lexical scope: That a function define inside a function will always have an access to its 
// outer scope is know as Lexical scope.



function test(){
    let a = 2;

    function test1(){
        console.log(a)
        
    }

    return test1
}

let fun = test();
console.log(fun);
fun()
