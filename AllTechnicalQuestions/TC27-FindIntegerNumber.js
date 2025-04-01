let str = 'Welcome1 to JavaScript18';

for(let i=0; i<str.length; i++){
    
    let ch = str.charAt(i);
    if(ch>='0' && ch<='9'){
        process.stdout.write(ch + " ")
        
    }

}