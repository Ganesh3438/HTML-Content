let num = 123;
let str = num.toString()
let res = ''

for(let i=0; i<str.length; i++){
    let ch = str.charAt(i);
    res = res + ch;
    if(i!==str.length-1){
        res = res+','
    }
    
}

console.log(res)