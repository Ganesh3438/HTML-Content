const fs = require("fs")

// Reading files in synchronous mannner
// To read a file in synchronous maanner we have method call "readFileSync()"

// console.log('Before');

// let data1 = fs.readFileSync('TC05-f1.txt')
// let data2 = fs.readFileSync('TC06-f2.txt')
// let data3 = fs.readFileSync('TC07-f3.txt')

// console.log('This is file 1 data ---> '+ data1)
// console.log('This is file 2 data ---> '+ data2)
// console.log('This is file 3 data ---> '+ data3)

// console.log('after');

// Note: Above approach is not at all good. Our application level gets down..

// Now we will try in asynchronous way..

console.log('Before');

fs.readFile('TC05-f1.txt', callbackReadFile1)


function callbackReadFile1(err, data){
    if(err){
        console.log(err)
    }else{
        console.log('File 1 data --->' + data)
        fs.readFile('TC05-f2.txt', callbackReadFile2)
    }
}

// file 2:
// fs.readFile('TC05-f2.txt', callbackReadFile2)


function callbackReadFile2(err, data){
    if(err){
        console.log(err)
    }else{
        console.log('File 2 data --->' + data)
        fs.readFile('TC05-f3.txt', callbackReadFile3)
    }
}

// file 3:

// fs.readFile('TC05-f3.txt', callbackReadFile3)

function callbackReadFile3(err, data){
    if(err){
        console.log(err)
    }else{
        console.log('File 3 data --->' + data)
    }
}

console.log('after')