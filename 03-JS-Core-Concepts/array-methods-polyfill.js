/**
 * ARRAY METHODS POLYFILLS
 * Instead of just using .map() or .filter(), I wrote them from scratch using prototypes.
 * This is frequently asked in interviews and builds a deep understanding of HOFs (Higher Order Functions).
 */

const numbers = [1, 2, 3, 4, 5];

// 1. My Custom Map
Array.prototype.myMap = function(callback) {
    const result = [];
    // 'this' refers to the array calling the method
    for (let i = 0; i < this.length; i++) {
        // Push the result of the callback function
        result.push(callback(this[i], i, this));
    }
    return result;
};

const doubled = numbers.myMap((num) => num * 2);
console.log("Custom Map Output:", doubled); // [2, 4, 6, 8, 10]


// 2. My Custom Filter
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        // Only push if the callback returns true (truthy)
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const evens = numbers.myFilter((num) => num % 2 === 0);
console.log("Custom Filter Output:", evens); // [2, 4]


// Note: Writing these manually made me respect built-in JS methods a lot more!
