let name = 'abc';
let data = name.split('');

for(let i=0; i<name.length; i++){
    
    for(let j=0; j<name.length; j++){

        for(let k=0; k<name.length; k++){
          if(i!=j && j!=k && k!=i){
            // process.stdout.write("" +data[i] + data[j] + data[k])
            console.log("" +data[i] + data[j] + data[k])
          }
        }
    }
}