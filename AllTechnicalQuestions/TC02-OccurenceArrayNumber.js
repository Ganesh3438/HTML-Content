let arr = [1,2,4,4,4,4,4,43,3,6,7,8]
let map = new Map();

for(let i=0; i<arr.length; i++){
    let ch = arr[i];
    let count = map.get(ch);

    if(count == null){
        map.set(ch,1)
    }else{
        count = count+1;
        map.set(ch, count)
    }


}

console.log(map)

// for(const [key, value] of map.entries()){
//     process.stdout.write(key+"  "+value)
// }
