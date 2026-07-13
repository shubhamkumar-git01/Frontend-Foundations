/**
 * PROMISE CHAINING & ASYNC/AWAIT
 * How to avoid the "Pyramid of Doom" (Callback Hell).
 */

// Simulating an asynchronous database call
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve({ id: 1, name: "Shubham" });
            else reject("User not found!");
        }, 1000);
    });
};

// Simulating getting posts for a user
const getPosts = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
};

// --- THE OLD WAY: Promise Chaining (.then / .catch) ---
console.log("Starting Promise Chain...");

getUser(1)
    .then(user => {
        console.log("Got user via Chain:", user.name);
        return getPosts(user.name); // Return another Promise
    })
    .then(posts => {
        console.log("Got posts via Chain:", posts);
    })
    .catch(error => {
        console.error("Error in Chain:", error);
    });


// --- THE MODERN WAY: Async/Await (Syntactic Sugar) ---
// This is exactly the same under the hood, but reads top-to-bottom like synchronous code!

async function fetchUserAndPosts() {
    console.log("Starting Async/Await flow...");
    
    try {
        // 'await' pauses this specific function until the Promise resolves
        const user = await getUser(1);
        console.log("Got user via Async/Await:", user.name);
        
        const posts = await getPosts(user.name);
        console.log("Got posts via Async/Await:", posts);
        
    } catch (error) {
        // All rejections go straight to the catch block!
        console.error("Error in Async/Await:", error);
    }
}

// Call the async function
fetchUserAndPosts();

/**
 * INTERVIEW QUESTION: What happens if I call getUser(2) which rejects?
 * Answer: In the Promise Chain, it skips all the .then() blocks and jumps to the .catch().
 * In Async/Await, it throws an exception at the 'await getUser(2)' line and jumps into the catch{} block.
 */
