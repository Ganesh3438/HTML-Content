for(let i=1; i<=10; i++){
    let temp = 0;

    for(let j=2; j<i-1; j++){
        if(i%j==0){
            temp++
        }
    }

    if(temp==0){
        console.log(i)
    }
}