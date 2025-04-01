let num = 123;
let str = num.toString();  // Convert number to string

let res = '';

for (let i = 0; i < str.length; i++) {
    res += str[i];  // Append the digit
    if (i !== str.length - 1) {  
        res += ',';  // Append comma if it's not the last digit
    }
}

console.log(res);  // "1,2,3"
