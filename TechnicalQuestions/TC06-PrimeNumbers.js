let n  = 100;

for(let i=1; i<=n; i++){
let temp =0;
for(let j=2; j<i-1; j++){
    if(i%j==0){
        temp++;
    }
}

if(temp==0){
    console.log(i)
}

}