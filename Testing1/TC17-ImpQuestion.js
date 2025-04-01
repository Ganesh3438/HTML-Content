let name = 'Hello world';
let map = new Map();
let temp = 0;

// Step 1: Count characters
for (let i = 0; i < name.length; i++) {
    let ch = name.charAt(i);
    let count = map.get(ch) || 0;
    map.set(ch, count + 1);
}

// Step 2: Build the result string with position-based logic
let result = '';
let lCount = 0;

for (let i = 0; i < name.length; i++) {
    let ch = name.charAt(i);

    if (ch === 'l') {
        lCount++;
        result += ch + lCount; // Append 'l' with its sequence position
    } else {
        result += ch; // Append other characters as they are
    }
}

console.log(result);
