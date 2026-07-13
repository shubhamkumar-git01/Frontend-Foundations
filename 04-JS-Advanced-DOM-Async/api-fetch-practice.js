/**
 * API FETCH PRACTICE
 * Handling asynchronous operations using modern async/await syntax.
 */

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Modern approach: async/await
async function fetchUsers() {
    console.log("Loading users...");
    
    try {
        // Await pauses the function execution until the promise resolves
        const response = await fetch(API_URL);
        
        // Always check if response is OK!
        if (!response.ok) {
            throw new Error(HTTP Error! Status: \);
        }
        
        const data = await response.json();
        console.log("Users fetched successfully:", data);
        
        // Usually, here is where we would call renderUsers(data) to update the DOM
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
        // Fallback UI code would go here
    } finally {
        console.log("Loading complete. (This runs no matter what)");
    }
}

fetchUsers();
