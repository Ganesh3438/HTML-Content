const fs = require('fs')

console.log('First line');

// let data = fs.readFileSync('f1.txt')

// console.log('File 1 data -> '+ data)


// let data2 = fs.readFileSyn('f2.txt')
// console.log('File 2 data -> '+ data2)


fs.readFile('f1.txt', cb1)

function cb1(err, data){
    if(err){
        console.log(err)
    }else{
        console.log('File1 data-> '+data)
    }
}

fs.readFile('f2.txt', cb2)

function cb2(err, data){

    if(err){
        console.log(err)
    }else{
        console.log('File2 data-> '+data)
    }

}



console.log('Last line');