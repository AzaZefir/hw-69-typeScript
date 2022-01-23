class Cat {
    constructor(moving, voice) {
        this.moving = moving;
        this.voice = voice;
    }
    information() {
        return `this animal moving in the ${this.moving}, say ${this.voice}`;
    }
}
class Fish {
    constructor() {
        this.moving = 'water';
    }
    information() {
        return `this animal moving in the ${this.moving}, cant say nothing`;
    }
}
class Bird {
    constructor() {
        this.moving = 'air';
        this.voice = 'chikchirik';
    }
    information() {
        return `this animal moving in the ${this.moving}, say ${this.voice}`;
    }
}
let animal = new Cat('land', 'miau-miau').information();
console.log(animal);
console.log(new Bird().information());
console.log(new Fish().information());
//# sourceMappingURL=app.js.map