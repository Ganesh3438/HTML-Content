// WeakSet
// A WeakSet is similar to a regular Set, but with the following key differences:

// It only allows objects as values (no primitive values).
// It does not prevent garbage collection, meaning if an object is no longer referenced elsewhere, it will be removed automatically.
// It does not support iteration (e.g., no forEach, values(), or size property).


let weakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

obj1 = null; // The object is now eligible for garbage collection

// The object will be automatically removed from the WeakSet when garbage collection runs.
