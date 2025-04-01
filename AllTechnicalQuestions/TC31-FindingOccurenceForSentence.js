let name = 'JavScript is very Powerful trust me it is very Powerful';
let words = name.split(' ');
let res = '';
let map = new Map();

for(let i=0; i<words.length; i++){
    let ch = words[i];
    let count = map.get(ch);
    if(count == null){
        map.set(ch, 1)
    }else{
        count = count+1;
        map.set(ch, count)
    }
}

console.log(map)