let str = 'a2b3c4';

for(let i=0; i<str.length; i++){

    let ch = str.charAt(i);
    if(!isNaN(str.charAt(i+1))){
        let count = parseInt(str.charAt(i+1));

        for(let i=0; i<count; i++){
            process.stdout.write(ch)
        }
        i++;
    }

}