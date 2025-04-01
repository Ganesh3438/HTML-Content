let result = []

for(let i=1; i<=10; i++){
let temp = 0;

for(let j=2; j<i-1; j++){
    if(i%j==0){
        temp = temp+1;
    }
}

if(temp==0){
    console.log(i);
    // process.stdout.write(i + " ")
    // result.push(i)
}

}

// console.log(result)