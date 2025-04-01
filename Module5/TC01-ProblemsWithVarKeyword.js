var a = 20;
console.log(a)

if(a === 20){
    var b = 100;
    console.log(b)
}

// variables declared with var keyword are not blocked scoped they are function scoped 
console.log(b)

function test(){
    var c = 120;
    console.log(c)
}

test()

// Following below line will get an error that c is not defined as we discussed variables 
// declared with var keyword are not blocked scoped they are function scoped 
console.log(c)


