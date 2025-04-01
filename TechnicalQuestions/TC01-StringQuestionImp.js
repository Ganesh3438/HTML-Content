// let name = "ab2cdef3g4";
let name = 'a2b3c4';

let result = "";

for (let i = 0; i < name.length; i++) {
    let ch = name.charAt(i);

    if (!isNaN(name.charAt(i + 1))) {  // Check if the next character is a number
        
        let count = parseInt(name.charAt(i + 1)); // Convert the number to an integer

        for (let j = 0; j < count; j++) {  // Manually append the character `count` times
            result += ch;
        }

        i++;  // Skip the number
    } else {
        result += ch;  // If no number follows, just add the character as is
    }
}

console.log(result);
