// 09: Error Handling

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("This always runs, regardless of errors.");
    }
}

divide(10, 2);
divide(10, 0);
