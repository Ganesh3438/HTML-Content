let num = 123;
let data = num.toString();

if(data.length==1){
    console.log(num)
}else{
    let SwappedStr = data[data.length-1] + data.slice(1, -1)+data[0];
    console.log(SwappedStr)
}