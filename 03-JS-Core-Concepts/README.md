# 03 JS Core Concepts 🧠

JavaScript is quirky. If you don't understand how it works under the hood (Execution Context, Call Stack, Memory Heap), it feels like magic—and not the good kind. This folder contains my deep dive into the very heart of JS.

## 📝 Key Learnings

1. **Hoisting**: Variable and function declarations are moved to the top of their scope before execution. But let and const remain in the Temporal Dead Zone (TDZ).
2. **Closures**: A function bundled together with its lexical environment. Basically, a function remembers the variables outside it, even after the outer function has finished running! This is how JS implements private variables.
3. **Prototypes**: JS isn't a class-based OOP language; it's prototype-based. Objects inherit properties directly from other objects via __proto__.

> *Personal Note: I spent 3 days just trying to figure out the 	his keyword. Rule of thumb: 	his refers to the object that called the function, UNLESS it's an arrow function (which takes 	his from its surroundings).*

## 🛠️ Practice Files
- closures-demo.js: Showing how lexical scope persists.
- rray-methods-polyfill.js: I wrote my own versions of .map() and .filter() to prove I know how they work natively.
