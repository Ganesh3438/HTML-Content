let name = 'Java';
let set = new Set();
let res = '';

for(let i=0; i<name.length; i++){
    
    let ch = name.charAt(i);
    if(!set.has(ch)){
        set.add(ch)
        res = res + ch;
    }

}

console.log(res)
