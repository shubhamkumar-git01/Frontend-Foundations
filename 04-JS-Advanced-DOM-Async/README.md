# 04 JS Advanced, DOM & Asynchronous Programming 🌐

JavaScript alone is just a language. To actually build websites, JS needs to interact with the Browser environment (Web APIs). This section covers how JS manipulates the webpage (DOM) and how it handles tasks that take time, like fetching data from a server (Asynchronous JS).

## 📝 A-Z Theoretical Notes

### 1. The DOM (Document Object Model) Tree
The DOM is not JavaScript. It is a Web API provided by the browser that JavaScript can communicate with. The browser parses HTML and creates a tree of objects (nodes). 
JS can select these nodes (`document.getElementById`, `document.querySelector`) and modify their styles, attributes, or content.

### 2. Event Bubbling, Capturing & Delegation
When you click a `<button>` inside a `<div>` inside the `<body>`, which element gets the click event? ALL of them!
- **Event Capturing (Trickling)**: The event starts at the top (Window) and trickles down to the target element.
- **Event Bubbling**: The event starts at the target element and bubbles UP to the Window. (This is the default behavior in modern browsers).

**Event Delegation (Crucial Optimization):**
Instead of adding `addEventListener` to 100 individual `<li>` elements, you attach ONE listener to the parent `<ul>`. Thanks to Event Bubbling, any click on an `<li>` will bubble up to the `<ul>`. You can then use `event.target` to figure out exactly which `<li>` was clicked. This saves massive amounts of memory!

### 3. Asynchronous JavaScript & The Event Loop
This is the most important concept in JS interviews.
JavaScript is a **single-threaded, synchronous** language. It can only do one thing at a time. But how can it fetch a 2MB image in the background without freezing the entire webpage?

**The Event Loop Architecture:**
1. **Call Stack**: Executes synchronous code.
2. **Web APIs**: The browser handles background tasks (like `setTimeout`, `fetch`, `DOM events`) completely outside the Call Stack.
3. **Callback Queue**: When a `setTimeout` finishes, its callback function is pushed here.
4. **Microtask Queue**: When a `Promise` resolves, its callback (`.then`) is pushed here. *The Microtask Queue has higher priority than the Callback Queue!*
5. **The Event Loop**: A continuous loop that checks: "Is the Call Stack empty?" If yes, it pushes the first task from the Microtask Queue into the Call Stack. If the Microtask Queue is empty, it pushes from the Callback Queue.

### 4. Promises and Async/Await
In the old days, handling async tasks led to "Callback Hell" (Pyramid of Doom). 
**Promises** were introduced to solve this. A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has 3 states: `Pending`, `Fulfilled`, `Rejected`.

**Async/Await**: Syntactic sugar introduced in ES8. It makes asynchronous code *look* and *read* like synchronous code. 
- You must mark the function with `async`.
- You use `await` in front of a Promise to pause the execution of that specific function until the Promise resolves.
- *Always wrap `await` calls in a `try/catch` block to handle errors!*

### 5. Debouncing and Throttling
When building a search bar, you don't want to make an API call for every single keystroke.
- **Debouncing**: Only execute the function after the user has *stopped* typing for a specific amount of time (e.g., 500ms).
- **Throttling**: Execute the function immediately, but then ignore all subsequent calls for a specific amount of time (e.g., allow 1 API call per second).

## 🔗 Free Resources I Used
- **[Loupe (Philip Roberts)](http://latentflip.com/loupe/)** - A visual tool to see how the Call Stack, Event Loop, and Callback Queue work in real-time. His talk "What the heck is the event loop anyway?" is mandatory viewing.
- **[JavaScript.info: Promises, async/await](https://javascript.info/async)** - The best textual explanation of Promises and microtasks.
- **[MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)** - To look up what properties exist on different events.

## 🛠️ Practice Files inside this folder
- `event-delegation.html`: Proving that attaching events to dynamic children works beautifully if we delegate to the parent.
- `api-fetch-practice.js`: Fetching real data from JSONPlaceholder using modern `async/await` syntax and proper `try/catch` error handling.
