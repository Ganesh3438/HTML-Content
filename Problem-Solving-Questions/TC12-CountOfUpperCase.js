let name = 'He did an Excellent job !!'

let count = 0;

for(let i=0; i<name.length; i++){

    let ch = name.charAt(i);

    if(ch>='A' && ch<='Z'){
        count = count + 1;
    }

}

console.log(`The count of upper case in the given senetence is: ${count}`)