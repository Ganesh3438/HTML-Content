let name = "Hello World" // Hel2o Wor3d;
let count = 0;
let ans = '';
for(let i=0; i<name.length; i++){
    let ch = name.charAt(i);

    if(ch=='l'){
      count++;
      if(count==2){
        ans = ans + count;
      }else if(count == 3){
        ans = ans + count;
      }else{
        ans = ans + ch;
      }
    }else{
      ans = ans + ch;
    }
}

console.log(ans)