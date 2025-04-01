// let str = "Hello world";

// for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i);
//     if (ch === 'l') {
//         process.stdout.write(i+"")
//     } else {
//         process.stdout.write(ch+"")
//     }
// }

// let str = "Hello world";
// let result = "";
// let count = 1; // Counter to replace 'l' in sequence

// for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i);
//     if (ch === 'l') {
//         result += count; // Replace 'l' with sequential numbers
//         count++;
//     } else {
//         result += ch;
//     }
// }

// console.log(result);

let str = "Hello world";
let result = "";
let count = 0; // Track the number of 'l' characters seen

for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if(ch==='l'){
        count++;
        if(count==2){
            result = result + count;
        }else if(count ==3){
            result = result + count;
        }else{
            result = result + 'l'
        }

    }else{
        result = result + ch;
    }
        
}

console.log(result);

