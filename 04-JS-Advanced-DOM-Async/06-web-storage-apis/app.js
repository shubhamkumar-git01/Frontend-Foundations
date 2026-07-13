// 06: Web Storage APIs
// Note: This needs to run in a browser.

// LocalStorage (Persists until explicitly deleted)
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme'));
// localStorage.removeItem('theme');

// SessionStorage (Deleted when tab is closed)
sessionStorage.setItem('tempToken', 'xyz123');

// Storing objects (Must stringify!)
const user = { name: "Shubham", age: 25 };
localStorage.setItem('user', JSON.stringify(user));
const parsedUser = JSON.parse(localStorage.getItem('user'));
