let name = 'abbbcdeeeeee';

let map = new Map();
for(let i=0; i<name.length; i++){
    
    let ch = name.charAt(i);
    let count = map.get(ch);

    if(count==null){
        map.set(ch,1)
    }else{
        count = count+1;
        map.set(ch, count)
    }

}

for(let[key, value] of map.entries()){

if(value==1){
  process.stdout.write(key)
}else{
    process.stdout.write(key+""+value)
}

}