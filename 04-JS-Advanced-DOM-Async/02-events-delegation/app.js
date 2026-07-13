// 02: Events and Delegation
document.body.addEventListener("click", function(e) {
    if (e.target.tagName === 'BUTTON') {
        console.log("Button clicked: " + e.target.textContent);
    }
});
