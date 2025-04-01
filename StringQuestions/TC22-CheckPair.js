// function test(arr, number){

// let n = arr.length;

// for(let i=0; i<n-1; i++){

// for(let j=i+1; j<n; j++){

// if(arr[i] + arr[j] === number){
//     console.log(arr[i]+" "+ arr[j])
// }

// }

// }

// }


function test(arr, number) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = number - arr[i];

        if (map.has(complement)) {
            console.log(complement + " " + arr[i]);
        }

        map.set(arr[i], true); // Store the current number in the map
    }
}


let arr = [1,2,3,4,5]
let number = 5;

test(arr, number)