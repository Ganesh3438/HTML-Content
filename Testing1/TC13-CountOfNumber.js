let str = 'ab1fg2gtre9';
let count = 0;
for(let i=0; i<str.length;i++){
    let ch = str.charAt(i);
    if(!isNaN(ch)){
      count++;
    // console.log(ch)
    }
}

console.log(count)