let num = [1,2,3, 5, 9, 11, 20];
let n = 20;
let ans = [];

for(let i=1; i<=n; i++){

    if(!num.includes(i)){
        ans.push(i);
    }
}

console.log(ans)