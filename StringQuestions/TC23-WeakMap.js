// In WeakMap, the keys must be objects, meaning you cannot use primitive 
// values (like numbers, strings, or booleans) as keys. Instead, 
// you must use an object or a function.

// It does not support iteration (e.g., no forEach, keys(), values(), or entries() methods).
// It does not have a size property, meaning you cannot determine how many key-value pairs exist.

let weakMap = new WeakMap();

let objKey = { name: "John", city: "Delhi" };

weakMap.set(objKey, "Some Value"); // Store objKey in WeakMap

console.log(`Name: ${objKey.name}, City: ${objKey.city}`);
// Output: Name: John, City: Delhi

// Update city
objKey.city = "Vizag";

console.log(`Name: ${objKey.name}, City: ${objKey.city}`);
// Output: Name: John, City: Vizag

