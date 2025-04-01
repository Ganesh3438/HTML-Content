let name = 'JavaScript';
let temp = '';

// Step 1: Reverse the string using a for loop
for (let i = name.length - 1; i >= 0; i--) {
    temp += name.charAt(i);
}

console.log(temp); // Expected output: "tpircSavaJ"

let result = '';

// Step 2: Count consecutive characters using a for loop
for (let i = 0; i < temp.length; i++) {
    let count = 1; // Initialize count for the current character

    // Inner loop to count occurrences of the same character
    for (let j = i + 1; j < temp.length; j++) {
        if (temp.charAt(i) === temp.charAt(j)) {
            count++; // Increment count for repeated characters
            i = j; // Move `i` forward to skip counted characters
        } else {
            break; // Exit when a different character is found
        }
    }

    // Append the character and its count to the result
    result += temp.charAt(i) + count;
}

console.log(result); // Expected output: "t1p1i1r1c1S1a2v1J1"
