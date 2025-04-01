const fs = require('fs')

console.log('First Line...')

let data = fs.readFileSync('f1.txt')
console.log('File --> '+data)

console.log('Last Line...')