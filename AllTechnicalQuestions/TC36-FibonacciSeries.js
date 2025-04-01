let a = 0;
let b = 1;
let c = 0;

for(let i=1; i<=10; i++){
    c = a+b;
    console.log(c)
    a = b
    b = c
}

