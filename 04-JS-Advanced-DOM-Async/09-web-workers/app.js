// 09: Web Workers
// JS is single-threaded. Web Workers allow background multi-threading!

/*
// In main.js:
const worker = new Worker('worker.js');
worker.postMessage('Start heavy computation');
worker.onmessage = function(e) {
    console.log('Result from worker:', e.data);
};

// In worker.js:
onmessage = function(e) {
    let result = 0;
    for(let i = 0; i < 1000000000; i++) {
        result += i;
    }
    postMessage(result); // Send back to main thread
};
*/
console.log("Check the comments for a Web Worker implementation!");
