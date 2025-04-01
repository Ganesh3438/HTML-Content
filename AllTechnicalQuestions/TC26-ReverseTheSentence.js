let str = 'Powerful is JavaScript';
let words = str.split(' ');
let res = '';

for(let i=words.length-1; i>=0; i--){
    if(i==0){
        res = res + words[i]
    }else{
        res = res + words[i] + " "
    }
}

console.log(res)