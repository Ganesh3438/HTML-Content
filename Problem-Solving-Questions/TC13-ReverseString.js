let name = 'JavaScript';

let temp = '';

for(let i=name.length-1; i>=0; i--){
    let res = name.charAt(i);
    temp = temp + res;
}

console.log(`Reversing a word is: ${temp}`)
