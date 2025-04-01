let name = 'automation';

// First way

for(let i=0; i<name.length; i++){

    let ch = name.charAt(i);
    let temp = 0
    for(let j=0; j<name.length; j++){
        let ch1 = name.charAt(j);

        if(ch === ch1){
          temp++;
        }
    }

    if(temp==1){
        process.stdout.write(ch)
    }

}

console.log('')
console.log('--------------------------------')

// Second way of writing the code

let map = new Map();

for(let k=0; k<name.length; k++){

    let char = name.charAt(k);
    let count = map.get(char);

    if(count==null){
        map.set(char, 1);
    }else{
        count = count + 1;
        map.set(char, count);
    }

}

// console.log(map)
for(const[key, value] of map.entries()){
    if(value==1){
        process.stdout.write(key)
    }
}