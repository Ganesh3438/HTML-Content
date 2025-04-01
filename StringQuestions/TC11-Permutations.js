// Write a function to find all permutations of a given string.

let name = 'ABC';
let n = name.length;
let char = name.split('');

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
            if(i!==j && j!==k && k!==i){
                console.log(" "+ char[i] + char[j] + char[k])
            }
        }
    }
}