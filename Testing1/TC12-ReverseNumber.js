let n = 123;

while(n>0){
    
    let rem = n % 10;
    process.stdout.write(rem + "")
    n = Math.floor(n/10);

}