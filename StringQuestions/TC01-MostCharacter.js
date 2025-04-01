let name = "Hello welcome to javascript, javascript is most powerful language";

let maxChar = '';  // Variable to store the most repeated character
let maxCount = 0;  // Variable to store the max frequency

// Loop through each character in the string
for (let i = 0; i < name.length; i++) {
    let char = name[i];
    if (char === ' ') continue; // Ignore spaces

    let count = 0;

    // Count occurrences of the current character
    for (let j = 0; j < name.length; j++) {
        if (name[j] === char) {
            count++;
        }
    }

    // Update the most repeated character
    if (count > maxCount) {
        maxCount = count;
        maxChar = char;
    }
}

console.log(`Most repeated character: '${maxChar}' with count: ${maxCount}`);
