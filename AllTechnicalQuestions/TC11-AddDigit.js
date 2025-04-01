let num = 123;
let str = num.toString()
let index = 1;
let value = 4;

let res = '';

for(let i=0; i<str.length; i++){
    let ch = str.charAt(i)
    if(i==index){
        res = res+value
    }
    res = res + ch;
}

let integerValue = parseInt(res);
console.log(integerValue)