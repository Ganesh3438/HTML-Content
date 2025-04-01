let data = 'Care';
let data1 = 'Race';

let ans = data.toLowerCase().split('').sort().join();
let ans1 = data1.toLowerCase().split('').sort().join();

if(ans===ans1){
    console.log('It is an anagram');
}else{
    console.log('It is not an anagram')
}

