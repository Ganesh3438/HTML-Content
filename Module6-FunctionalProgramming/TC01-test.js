let even = [1,2,3,4,5,6,7,8,9];
let num = 6;
let seen = {}; // HashMap to store numbers we have seen

even.map(value => {
    let complement = num - value; // Find the number that adds up to `num`
    if (seen[complement]) {
        console.log(value + " " + complement); // Print the pair
    }
    seen[value] = true; // Store the current number in the HashMap
});