// 08: Type Coercion & Equality
// JS is dynamically typed and will try to convert types to match.

console.log(5 + "5"); // "55" (Number gets coerced to String)
console.log(5 - "2"); // 3 (String gets coerced to Number)
console.log("5" * "2"); // 10

// Falsy values: false, 0, "", null, undefined, NaN
if (!"") {
    console.log("Empty string is falsy!");
}

// ALWAYS use === (Strict Equality)
console.log(0 == false); // true
console.log(0 === false); // false
