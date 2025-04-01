let str = 'Welcome to JavScript';
let count = 0;
for(let i=0; i<str.length; i++){
    let ch = str.charAt(i);

    if(ch>='A'&& ch<='Z'){
        process.stdout.write(ch)
        count++
    }
}

console.log(`  ---------> The count of uppper case are: ${count}`)