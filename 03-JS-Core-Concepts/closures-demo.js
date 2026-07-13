/**
 * CLOSURES DEMONSTRATION
 * A closure gives you access to an outer function's scope from an inner function.
 */

// Example 1: Basic Closure
function createGreeting(greetingWord) {
    // greetingWord is in the outer scope
    return function(name) {
        // The inner function remembers 'greetingWord' even after createGreeting has executed!
        console.log(\, \!);
    }
}

const sayHello = createGreeting("Hello");
const sayNamaste = createGreeting("Namaste");

sayHello("Shubham"); // Output: Hello, Shubham!
sayNamaste("World"); // Output: Namaste, World!


// Example 2: Emulating Private Variables (Module Pattern)
function createCounter() {
    let count = 0; // Private variable, cannot be accessed directly from outside
    
    return {
        increment: function() {
            count++;
            console.log("Count is now:", count);
        },
        decrement: function() {
            count--;
            console.log("Count is now:", count);
        },
        getCount: function() {
            return count;
        }
    };
}

const myCounter = createCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
console.log(myCounter.count); // undefined (It is truly private!)
console.log("Actual count:", myCounter.getCount()); // 2

// I initially struggled to understand why count didn't reset to 0. 
// It's because the object returned holds a reference to the SAME lexical scope where count lives!
