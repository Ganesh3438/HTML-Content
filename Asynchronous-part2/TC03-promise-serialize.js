const fs = require("fs");

let f1p = fs.promises.readFile("TC02-file1.txt")
// let f2p = fs.promises.readFile("TC02-file2.txt")
// let f3p = fs.promises.readFile("TC02-file3.txt")


function cb1(data){
    console.log("This is File1 data --->" + data)
    let f2p = fs.promises.readFile("TC02-file2.txt")
    // console.log(f2p)
    return f2p

}

function cb2(data){
    console.log("This is File2 data --->" + data)
    let f3p = fs.promises.readFile("TC02-file3.txt")
    return f3p;
}

function cb3(data){
    console.log("This is File3 data --->" + data)
}

f1p.then(cb1).then(cb2).then(cb3)