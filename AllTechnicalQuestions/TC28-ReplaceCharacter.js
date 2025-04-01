let name = 'Apple';
let res = '';

for(let i=0; i<name.length; i++){
    let ch = name.charAt(i);

    if(ch=='p'){
       res = res+'$';
    }else{
        res = res + ch;
    }
}

console.log(res)