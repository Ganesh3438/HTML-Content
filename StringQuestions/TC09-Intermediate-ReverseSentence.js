let name = "Hello World";
let str = name.split(' ');
let result = ''
for(let i=str.length-1; i>=0; i--){

    if(i==0){
       result = result + str[i]
    }else{
        result = result + str[i] + " ";
    }

}

console.log(result)




