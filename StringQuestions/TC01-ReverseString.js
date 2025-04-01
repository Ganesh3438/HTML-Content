let name = 'Hello'

let ans = '';


// One way of writing
for(let i=name.length-1; i>=0; i--){

    let ch = name[i]
    ans = ans + ch;
}

console.log(ans)

console.log('------------------------------------------')

let res = '';
// Second way of writing
for(let i=name.length-1; i>=0; i--){
    
    let ch1 = name.charAt(i);
    res = res + ch1;
}

console.log(res)