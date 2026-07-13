// 03: Functions & Scope

// Function Declaration (Hoisted)
function greet(name) {
    return Hello \;
}

// Function Expression (Not Hoisted)
const sayHi = function() {
    return "Hi!";
};

// Arrow Function (ES6)
const add = (a, b) => a + b;

console.log(greet("Shubham"));
console.log(add(5, 10));
