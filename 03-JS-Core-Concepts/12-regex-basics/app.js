// 12: Regular Expressions (Regex)

const text = "Hello, my email is shubham@example.com";

// Regex literal
const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

console.log(emailRegex.test(text)); // true
console.log(text.match(emailRegex)[0]); // shubham@example.com

// Replace using regex
const hiddenEmail = text.replace(emailRegex, "****@****.com");
console.log(hiddenEmail);
