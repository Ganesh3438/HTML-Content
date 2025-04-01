let arr= [10,20,30,60,100, 121, 140, 40, 54, 65, 1001];

for(let i=0; i<arr.length-1; i++){
    
    let min = i;

    for(let j=i+1; j<arr.length; j++){

        if(arr[j]> arr[min]){
            min = j;
        }

        
    }

        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;


}

console.log(arr[1])