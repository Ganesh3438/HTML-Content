let arr= [10,20,30,60,100, 121, 140, 40, 54, 65, 1001];

let k = 1001;
let status = false;

for(let i=0; i<arr.length; i++){

    if(arr[i] ==k){
        status = true;
        break;
    }

    
}

console.log(status)