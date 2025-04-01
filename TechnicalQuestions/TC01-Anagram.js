// function isAnagram(str1, str2) {
//     return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
// }

// console.log(isAnagram('Care', 'Race'));

let name = 'Care';
let name1 = 'Race';

let data = name.toLowerCase().split('').sort().join('');
let data1 = name1.toLowerCase().split('').sort().join('');

if(data===data1){
console.log('It is an anagram')
}else{
    console.log('It is not a anagram')
}


console.log('----------------------------------')
let test = "JavaScript";
let res = "";
for(let i=test.length-1; i>=0; i--){
 res = res + test[i];
}

console.log(res)

let map = new Map();

for(let j=0; j<res.length; j++){
    let result =  res[j]
    // let result = res.charAt(i)
    let count = map.get(result);

    if(count == null){
        map.set(result, 1)
    }else{
        count = count + 1;
        map.set(result, count)
    }
}

// console.log(map)

for(const[key, value] of map.entries()){
    if(value>=1){
        process.stdout.write(key+""+value)
    }
}