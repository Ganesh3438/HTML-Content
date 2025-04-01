let test = function() {
    console.log(1);
}

let test1 = function(a) {
    console.log(a + 2);
}

let test2 = function(a, b) {
    console.log(a*b);
}

test()
test1(2)
test2(2,3)

// Arrow function declaration
console.log('-------------------------------------------------------------')
let demo = ()=>{
    console.log(10);
}


let demo1 = (a)=>{
    console.log(a+2);
}


let demo2 = (a, b)=>{
    console.log(a*b);
}

demo()
demo1(4)
demo2(4,5)