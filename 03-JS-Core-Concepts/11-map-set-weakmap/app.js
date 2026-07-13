// 11: Map and Set (ES6 Data Structures)

// SET: Collection of UNIQUE values
const uniqueNumbers = new Set([1, 1, 2, 2, 3]);
uniqueNumbers.add(4);
uniqueNumbers.add(4);
console.log(uniqueNumbers); // Set(4) { 1, 2, 3, 4 }

// MAP: Key-Value pairs where keys can be ANY type (even objects)
const userMap = new Map();
userMap.set('name', 'Shubham');
userMap.set('role', 'Developer');
console.log(userMap.get('name'));

// WeakMap (Keys must be objects, helps prevent memory leaks)
let obj = { id: 1 };
const wm = new WeakMap();
wm.set(obj, "Secret Data");
obj = null; // Memory can now be garbage collected!
