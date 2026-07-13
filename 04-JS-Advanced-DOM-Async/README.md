# 04 JS Advanced, DOM & Async 🌐

This is where JavaScript actually interacts with the webpage and the outside world. This module covers DOM manipulation, Event Delegation, and Async programming (Promises, fetch).

## 📝 Key Learnings

1. **Event Delegation**: Instead of adding ddEventListener to 100 list items, just add ONE listener to the parent <ul>. It uses "event bubbling" and saves massive memory!
2. **The Event Loop**: JS is single-threaded. Synchronous code runs first. Then the Microtask Queue (Promises) runs. Then the Callback Queue (setTimeout) runs. This changed how I debug completely.
3. **Async / Await**: Syntactic sugar over Promises. It makes asynchronous code look synchronous. Remember to always wrap it in 	ry...catch!

## 🛠️ Practice Files
- event-delegation.html: Proving that attaching events to dynamic children works beautifully if we delegate to the parent.
- pi-fetch-practice.js: Fetching dummy data from JSONPlaceholder with proper error handling.

> *Personal milestone: Successfully fetching data from an API and updating the DOM without page reload was the moment I felt like a real developer.*
