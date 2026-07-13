/**
 * DEBOUNCE AND THROTTLE
 * High-performance optimizations for DOM events.
 * Crucial for things like Search Bars, Scroll Events, and Window Resizing.
 */

// 1. DEBOUNCING
// Rule: Only execute the function AFTER a specific amount of time has passed 
// since the LAST time it was called.
// Use Case: Search bar autocomplete. We don't want to make an API call for every keystroke!

function debounce(func, delay) {
    let timerId;
    
    // We return a closure that remembers the timerId
    return function(...args) {
        // If the function is called again before the delay finishes, clear the old timer!
        if (timerId) {
            clearTimeout(timerId);
        }
        
        // Start a new timer
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example Usage (imagine attaching this to an input event)
const fetchSearchResults = (query) => {
    console.log(`Fetching results for: \${query}`);
};

const debouncedSearch = debounce(fetchSearchResults, 500);

// If the user types "S - h - u - b" very quickly:
debouncedSearch("S");
debouncedSearch("Sh");
debouncedSearch("Shu");
debouncedSearch("Shub");
// Only "Fetching results for: Shub" will run, 500ms after the last keystroke!


// 2. THROTTLING
// Rule: Execute the function immediately, but ignore all subsequent calls 
// for a specific amount of time.
// Use Case: A "Shoot" button in a game, or tracking Scroll position.

function throttle(func, limit) {
    let inThrottle = false;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args); // Execute immediately
            inThrottle = true;      // Lock the function
            
            // Unlock after the time limit
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

const trackScroll = () => {
    console.log("Scroll event fired!");
};

const throttledScroll = throttle(trackScroll, 1000);
// Even if the user scrolls 100 times in a second, this will only fire ONCE per second.
