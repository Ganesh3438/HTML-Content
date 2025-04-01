let arr = [1,2,3,5,6];
let n = 6;


// let expected = n*(n+1)/2;
// let actual = 0;

// for(let i=0; i<arr.length; i++){
//     actual = actual + arr[i];
// }

// console.log(expected-actual)


let missingNumbers = [];

for(let i=1; i<n; i++){
    if(!arr.includes(i)){
       missingNumbers.push(i)
    }
}

console.log(missingNumbers)