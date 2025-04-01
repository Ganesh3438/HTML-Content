let name = 'JavaScript';
let res = ''
for(let i=name.length-1; i>=0; i--){
    let ch = name.charAt(i);
    res = res+ch;
}
console.log(res)