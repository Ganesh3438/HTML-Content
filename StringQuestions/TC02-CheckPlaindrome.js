let name = 'madam';
let temp = name;
let res = '';
for(let i=name.length-1; i>=0; i--){

let ch = name.charAt(i);
res = res + ch;

}

if(res===temp){
    console.log('It is an palindrome')
}else{
    console.log('It is not an palindrome')
}