// 10: Math and Date

// Math
console.log(Math.PI);
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.random()); // Random between 0 and 1

// Generating random number between 1 and 10:
const random1To10 = Math.floor(Math.random() * 10) + 1;

// Date
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()); // 0-indexed! (0 = Jan)
console.log(now.toISOString());
