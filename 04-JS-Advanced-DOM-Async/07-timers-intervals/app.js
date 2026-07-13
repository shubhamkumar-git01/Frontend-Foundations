// 07: Timers and Intervals

console.log("Start");

// setTimeout: runs ONCE after delay
const timeoutId = setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// setInterval: runs REPEATEDLY every delay
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log("Interval tick:", count);
    
    // How to stop it
    if (count === 3) {
        clearInterval(intervalId);
        console.log("Interval stopped!");
    }
}, 1000);

console.log("End"); 
// Output order: Start -> End -> Interval 1 -> Interval 2 -> Timeout -> Interval 3
