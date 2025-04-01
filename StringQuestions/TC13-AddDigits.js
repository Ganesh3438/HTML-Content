let num = 123;
let str = num.toString();  // Convert number to string

let index = 1;
let value = 4;
let res = '';

for (let i = 0; i < str.length; i++) {
    if (i === index) {
        // res += value;  // Insert the value at the given index
        res = res+value;
    }
    // res += str[i];  // Append the original character
    // res = res+str[i];
    res = res+str.charAt(i)
}

// Convert the modified string back to an integer using parseInt
let finalResult = parseInt(res);

console.log(finalResult);  // 1423
console.log(typeof finalResult);  // "number"
