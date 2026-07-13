// 07: ES6 Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(\ makes a sound);
    }
}

class Dog extends Animal {
    speak() {
        console.log(\ barks);
    }
}

const d = new Dog("Rex");
d.speak();
