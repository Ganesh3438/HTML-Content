let name = 'JavaScript';

let res = name.split('');
let uniqueCharacters = [...new Set(res)]
console.log(uniqueCharacters)
let ans = uniqueCharacters.join('');
console.log(ans)