let data = 'care';
let data1 = 'race';

let res = data.toLowerCase().split('').sort().join();
let res1 = data1.toLowerCase().split('').sort().join();

// console.log(res + " "+ res1);

if(res === res1){
    console.log('It is an anagram')
}else{
    console.log('It is not an anagram')
}