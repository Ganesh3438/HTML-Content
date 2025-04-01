let name = 'Welcome to JavaScript !!'

let result = "";

for(let i=0; i<name.length; i++){
    let ch = name.charAt(i);
    if(ch>='A' && ch<='Z'){
        // console.log(ch)
        result += ch + ' ';
    }

}

console.log(result)