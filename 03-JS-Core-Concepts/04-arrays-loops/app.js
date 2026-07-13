// 04: Arrays and Loops
const fruits = ["Apple", "Banana", "Cherry"];

// Traditional for-loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop (Modern)
for (let fruit of fruits) {
    console.log(fruit);
}

// Higher Order Functions: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
