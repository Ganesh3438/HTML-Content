let name = "a2b3c4";

let result = "";

for(let i=0; i<name.length; i++){

    let ch = name.charAt(i);

    if(isNaN(ch)){
        
        let count = parseInt(name.charAt(i+1))

        for(let j=0; j<count; j++){
    
            result = result + ch;

        }

    }
}

console.log(result)