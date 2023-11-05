// Note: This is Parallel operation, we need to make it as serialize operations. 
// Check next test case for serialize operations.

const fs = require("fs");

// let f1p = fs.promises.readFile("TC02-file1.txt", readFileCallBack)
// let f2p = fs.promises.readFile("TC02-file2.txt", readFileCallBack)
// let f3p = fs.promises.readFile("TC02-file3.txt", readFileCallBack)

console.log('Before')
let f1p = fs.promises.readFile("TC02-file1.txt")
let f2p = fs.promises.readFile("TC02-file2.txt")
let f3p = fs.promises.readFile("TC02-file3.txt")


function readFileCallBack(data){
       console.log('This is the data ---> ' + data)
}

function handleError(err){
    console.log('This is the data ---> ' + err)
}

f1p.then(readFileCallBack)
f2p.then(readFileCallBack)
f3p.then(readFileCallBack)

console.log("--------------------")

f1p.catch(handleError)
f2p.catch(handleError)
f3p.catch(handleError)

console.log('After')