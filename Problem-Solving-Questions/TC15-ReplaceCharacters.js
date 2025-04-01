let name = 'Apple';
let temp = '';
for(let i=0; i<name.length; i++){
    
    let ch = name.charAt(i);
    if(ch==='p'){
        temp = temp + '$'
    }else{
        temp = temp + ch;
    }

}

console.log(temp)