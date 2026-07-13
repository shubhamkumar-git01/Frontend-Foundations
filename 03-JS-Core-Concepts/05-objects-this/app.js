// 05: Objects and 'this'
const person = {
    name: "Shubham",
    age: 25,
    // Method
    introduce: function() {
        console.log(Hi, I'm \);
    },
    // Arrow function does NOT have its own 'this'
    badIntroduce: () => {
        console.log(Hi, I'm \); // will be undefined
    }
};

person.introduce();
person.badIntroduce();
