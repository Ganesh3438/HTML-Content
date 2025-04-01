let a = 2;

if(a){
    console.log('It is a truthy value')
}else{
    console.log('It is a falsy value')
}

// So here we will get a doubt that when will we get falsy values, please follow below
// false
// 0
// -0
// On (BigInt zero)
// '', "", ``(Empty String)
// null
// undefined 
// NaN

let b = ""
if(b){
    console.log('It is a truthy value')
}else{
    console.log('It is a falsy value')
}


