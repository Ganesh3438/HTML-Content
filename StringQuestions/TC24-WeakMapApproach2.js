// Approach 2: Store Object Data in WeakMap
// If you want to store name and city inside WeakMap instead of the object itself:

let weakMap = new WeakMap();

let objKey = {}; // Empty object (acts as a key)

weakMap.set(objKey, { name: "John", city: "Delhi" });

console.log(`Name: ${weakMap.get(objKey).name}, City: ${weakMap.get(objKey).city}`);
// Output: Name: John, City: Delhi

// Update city inside WeakMap
weakMap.get(objKey).city = "Vizag";

console.log(`Name: ${weakMap.get(objKey).name}, City: ${weakMap.get(objKey).city}`);
// Output: Name: John, City: Vizag
