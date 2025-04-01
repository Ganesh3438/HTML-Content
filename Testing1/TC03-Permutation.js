let str = 'abc';
let data = str.split('')
for(let i=0; i<str.length; i++){

    for(let j=0; j<str.length; j++){
        for(let k=0; k<str.length; k++){
            if(i!=j && j!=k && k!=i){
             console.log("" +  data[i] + data[j] + data[k])

            }
        }
    }
}