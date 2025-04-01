let name = 'ab3cde6';
let result = '';

for(let i=0; i<name.length; i++){
    
    let ch = name.charAt(i);
    
    if(!isNaN(name.charAt(i+1))){
      
        let count = parseInt(name.charAt(i+1));
 
        for(let i=0; i<count; i++){
            result = result + ch;
        }
        i++;

    }else{

        result = result + ch;
    }
    

}

console.log(result)