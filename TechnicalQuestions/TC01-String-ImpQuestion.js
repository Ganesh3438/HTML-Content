const str = "Hello";
// const str = "aabbbcccc";

const map = new Map();

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    let count = map.get(ch);

    if(count == null){
        map.set(ch, 1)
    }else{
        count = count + 1
        map.set(ch, count)
    }
    
    // if (map.has(ch)) {
    //     map.set(ch, map.get(ch) + 1);
    // } else {
    //     map.set(ch, 1);
    // }
}

console.log(Object.fromEntries(map));
// console.log(map)

// -----------------------------------------------------------------

for (let [key, value] of map.entries()) {
    if (value >= 1) {
        process.stdout.write(key + "" + value);
    }
}
