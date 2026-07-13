/**
 * PROTOTYPAL INHERITANCE IN JAVASCRIPT
 * Before ES6 Classes were introduced (which is just syntactic sugar), 
 * this is how we did Object Oriented Programming in JS.
 * Understanding this proves you actually know how JS works under the hood.
 */

// 1. The Constructor Function
function User(name, email) {
    // 'this' refers to the new object being created
    this.name = name;
    this.email = email;
    this.online = false;
    
    // We COULD put methods here, but that's a bad idea.
    // If we put login() here, every single User instance would create its own copy of the function in memory!
    // this.login = function() { ... } 
}

// 2. The Prototype
// Instead of attaching methods to the instance, we attach them to the Prototype.
// Now, 1 million users will all SHARE this single function in memory.
User.prototype.login = function() {
    this.online = true;
    console.log(`\${this.name} has logged in.`);
};

User.prototype.logout = function() {
    this.online = false;
    console.log(`\${this.name} has logged out.`);
};

// 3. Creating Instances using the 'new' keyword
// The 'new' keyword does 4 things:
// - Creates a brand new empty object {}
// - Binds 'this' to that new object
// - Links the new object's __proto__ to the Constructor's prototype
// - Implicitly returns the new object
const userOne = new User("Shubham", "shubham@example.com");
const userTwo = new User("John", "john@example.com");

console.log(userOne);
userOne.login(); // Logs: Shubham has logged in.

// 4. Prototypal Inheritance (Creating an Admin that inherits from User)
function Admin(name, email, role) {
    // Call the User constructor, but bind 'this' to the Admin instance!
    User.call(this, name, email);
    this.role = role;
}

// Link Admin's prototype to User's prototype so it inherits login/logout
Admin.prototype = Object.create(User.prototype);
// Reset the constructor property back to Admin (otherwise it points to User)
Admin.prototype.constructor = Admin;

// Add an Admin-specific method
Admin.prototype.deleteUser = function(user) {
    console.log(`\${this.name} deleted user \${user.name}`);
};

const adminUser = new Admin("SuperAdmin", "admin@example.com", "Super");
adminUser.login(); // Inherited from User!
adminUser.deleteUser(userTwo); // Specific to Admin!

/**
 * Modern ES6 Equivalent (Much cleaner, but does the EXACT same thing under the hood):
 * 
 * class User {
 *   constructor(name, email) {
 *     this.name = name;
 *     this.email = email;
 *   }
 *   login() { ... }
 * }
 */
