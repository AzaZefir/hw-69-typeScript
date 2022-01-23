interface Animal {
    name: string;
    voice?: string;
    moving: string;
    information: () => string;
}
class Cat implements Animal {
    moving: string;
    voice: string;
    constructor(moving: string, voice: string) {
        this.moving = moving;
        this.voice = voice;
    }
    name: string;
    information():string{
        return `this animal moving in the ${this.moving}, say ${this.voice}`
    }
}
class Fish implements Animal {
    name: string;
    voice?: string;
    moving: string = 'water';
    information(): string{
        return `this animal moving in the ${this.moving}, cant say nothing`
    }
}
class Bird implements Animal {
    name: string;
    moving: string = 'air';
    voice: string = 'chikchirik';
    
    information() : string {
        return `this animal moving in the ${this.moving}, say ${this.voice}`
    }
}
    
let animal = new Cat('land', 'miau-miau').information();
console.log(animal);
console.log(new Bird().information());
console.log(new Fish().information());