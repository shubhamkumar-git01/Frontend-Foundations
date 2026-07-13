# 03 JavaScript Core Concepts 🧠

JavaScript is deceptively easy to start with, but incredibly weird once you look closely. If you don't understand how it works under the hood, JS will feel like a language full of random bugs. 

This section covers the absolute core of the JavaScript Engine. Understanding these concepts was the turning point in my career where I stopped being a "syntax copier" and became a true software engineer.

## 📝 A-Z Theoretical Notes

### 1. The Execution Context & Call Stack
Everything in JS happens inside an **Execution Context**. When a script runs, a Global Execution Context is created. It has two phases:
1. **Memory Creation Phase**: JS skims through the code and allocates memory for all variables and functions. Variables get the special value `undefined`, while whole function blocks are stored entirely.
2. **Code Execution Phase**: JS runs the code line by line, assigning actual values to the variables.

When a function is invoked, a brand new *Local Execution Context* is created and pushed onto the **Call Stack**. When the function finishes, it is popped off the stack and destroyed.

### 2. Hoisting and The Temporal Dead Zone (TDZ)
Because of the Memory Creation phase, you can call a `function` before you write it in the code! This phenomenon is called Hoisting.
- Variables declared with `var` are hoisted and initialized as `undefined`. Accessing them early gives `undefined`.
- Variables declared with `let` and `const` are ALSO hoisted, but they are kept in a separate memory space and are NOT initialized. Trying to access them before the actual line of code throws a `ReferenceError`. The time between the start of the block and the initialization is the **Temporal Dead Zone (TDZ)**.

### 3. Scope Chain & Lexical Environment
"Lexical" means hierarchy or sequence. A function's Lexical Environment is its local memory PLUS the Lexical Environment of its parent. 
If JS can't find a variable inside a function, it looks at the parent's memory. It keeps looking up the **Scope Chain** until it hits the Global scope. If it's still not there, it throws an error.

### 4. Closures (The Most Asked Interview Question)
A Closure is simply a function bundled together with its Lexical Environment.
Even if an outer function finishes executing and is popped off the Call Stack, any inner functions returned by it will **remember** the variables of that outer function!
> *Real-world use case*: Closures are how we create private variables in JavaScript (using the Module Pattern) and how functions like `setTimeout` can remember variables after a delay.

### 5. Prototypes and `this`
JavaScript is not an Object-Oriented language in the traditional class-based sense (like Java). It uses **Prototypal Inheritance**. 
Every object has a hidden `__proto__` property that points to another object. If you try to access a property that doesn't exist on an object, JS looks up the prototype chain to find it.

**The `this` keyword:**
- In a normal function, `this` refers to the object that *called* the function.
- In an Arrow Function (`() => {}`), `this` is lexically bound. It doesn't have its own `this`; it inherits `this` from whatever scope the arrow function was defined in.

## 🔗 Free Resources I Used
- **[Namaste JavaScript (Akshay Saini)](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)** - The absolute best playlist to understand JS under the hood (Execution Context, Hoisting, Event Loop). I highly recommend watching episodes 1-15 twice.
- **[JavaScript.info: Closures](https://javascript.info/closure)** - The best written guide on lexical environments.
- **[You Don't Know JS (Book Series)](https://github.com/getify/You-Dont-Know-JS)** - Free open-source books that go deeper into JS than any paid course.

## 🛠️ Practice Files inside this folder
- `closures-demo.js`: Showing how lexical scope persists and how to emulate private variables.
- `array-methods-polyfill.js`: Writing my own `.map()` and `.filter()` methods from scratch using Prototypes to deeply understand Higher-Order Functions.
