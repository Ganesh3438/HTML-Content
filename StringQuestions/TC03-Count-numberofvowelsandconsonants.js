// Count the number of vowels and consonants in a given string.
let name = 'Hello world';  //
let vowels = 'aeiouAEIOU';
let vowelCount = 0;
let consonantCount =0;

for(let i=0; i<name.length; i++){
    
    let ch = name.charAt(i);
    if(ch>='A' && ch<='Z' || ch>='a' && ch<='z'){

        if(vowels.includes(ch)){
            vowelCount++;
            
        }else{
            consonantCount++;
        }

    }

}

console.log(vowelCount)
console.log(consonantCount)