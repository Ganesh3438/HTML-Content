const fs = require('fs')

fs.readFile('TC02-f1.txt', callbackfunction1)

function callbackfunction1(err, data){

    if(err){
        console.log(err)
    }else{
        console.log('File 1 data --> '+ data)
    }
}


fs.readFile('TC02-f2.txt', callbackfunction2)

function callbackfunction2(err, data){

    if(err){
        console.log(err)
    }else{
        console.log('File 2 data --> '+data)
    }
}

fs.readFile('TC02-f3.txt', callbackfunction3)

function callbackfunction3(err, data){

    if(err){
        console.log(err)
    }else{
        console.log('file 3 --> '+ data)
    }
}