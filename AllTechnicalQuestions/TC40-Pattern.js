let randomName = '';
let randomEmail = '';

var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
randomName = randomName + pattern.charAt(Math.floor(Math.random() * pattern.length));
randomEmail = randomName + '@gmail.com'

console.log(randomName)
console.log(randomEmail)

