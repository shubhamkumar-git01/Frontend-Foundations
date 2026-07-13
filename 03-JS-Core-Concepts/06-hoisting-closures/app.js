// 06: Hoisting and Closures

// Hoisting: calling before declaration
console.log(hoistedVar); // undefined
var hoistedVar = 10;

// Closure: A function remembers its lexical scope even when executed outside
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}

const counter = outer();
counter(); // 1
counter(); // 2
