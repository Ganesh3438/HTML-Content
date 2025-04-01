let name = 'Race';
let name1 = 'Care';

let data = name.toLowerCase().split('').sort().join();
let data1 = name1.toLowerCase().split('').sort().join();

if(data===data1){
    console.log('It is an anargram')
}else{
    console.log('It is not an anagram')
}

// let data = name.toLowerCase().split('').sort().join('');