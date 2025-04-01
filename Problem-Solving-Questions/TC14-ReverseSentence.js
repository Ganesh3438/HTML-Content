let sen = 'Powerful is JavaScript';
let word = sen.split(' ');
let temp = '';

for(let i=word.length-1; i>=0; i--){
    if(i==0){
        temp = temp + word[i]
    }else{
        temp = temp + word[i] + " ";
    }
}

console.log(temp)
