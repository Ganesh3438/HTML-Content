let name ='Java'

const set = new Set();
let result = "";

for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    
    if (!set.has(ch)) {
        set.add(ch);
        result += ch;
    }
}

console.log(result);
