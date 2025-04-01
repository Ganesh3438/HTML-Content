let name = 'teeter';

for(let i=0; i<name.length; i++){
    
    let ch = name.charAt(i);
    let count = 0;
    for(let j=0; j<name.length; j++){
        let ch1 = name.charAt(j);

        if(ch===ch1){
            count++;
        }
    }

    if(count === 1){
        console.log(ch)
        break;
    }

}