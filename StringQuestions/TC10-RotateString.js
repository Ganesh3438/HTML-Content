function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false; // Lengths must be the same

    let combined = str1 + str1;
    return combined.includes(str2);
}

// Example usage
console.log(isRotation("abcde", "cdeab")); // Output: true
console.log(isRotation("abcde", "abced")); // Output: false



