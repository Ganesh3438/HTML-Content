// How do you remove duplicates from an array?

let arr = [1,2,3,4,5,6,1,4,5,6,2];


// // First approach:
// for(let i=0; i<arr.length; i++){

//     let value = arr[i]
//     let temp =0;

//     for(let j=0; j<arr.length; j++){

//         if(arr[j]==value){
//             temp++;
//         }

//     }

//     if(temp==1){
//         console.log(arr[i])
//     }
// }

// Second approach:

let map = new Map();

for(let i=0; i<arr.length; i++){
 
    let num = arr[i];
    let count = map.get(num);

    if(count==null){
        map.set(num, 1)
    }else{
        count = count+1;
        map.set(num, count);
    }


}

console.log('-----------------------')

// console.log(map)

for(const[key, value] of map.entries()){
    if(value==1){
        console.log(key)
    }
}