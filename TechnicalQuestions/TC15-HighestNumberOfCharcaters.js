const str1 = "JavaScript is amazing, and I love coding!";
let str = str1.toLowerCase().replace(/\s/g, "");
console.log(str)
let map = new Map();

for(let i=0; i<str.length; i++){
    let ch = str.charAt(i);
    let count = map.get(ch);

    if(count == null){
        map.set(ch, 1);
    }else{
        count++;
        map.set(ch, count);
    }
}
console.log(map)
// console.log(map)
let maxCount = 0;
let maxChar = ' ';

for(let[key,value] of map.entries()){
    if(value>maxCount){
     maxCount = value;
     maxChar = key
    }
}

console.log(maxCount +" "+ maxChar)



