// In JavaScript, "currying" is a functional programming technique where a function that takes 
// multiple arguments is transformed into a series of functions, each taking only one argument 
// at a time.


// let sum = function(x, y){
//     console.log(x+y);
// }

// sum(2,3)

// Curried function

let sumCurried = function(x){
    return function(y){
        console.log(x+y)
    }
}

let result = sumCurried(2);
result(3);
