
class Animal {
  constructor(name) {
    this.name = name
  }

  hello() {
    console.log(`Hello I'm ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }

  bark() {
    console.log(`${this.sound} I'm ${this.name}`);
  }
}

const elephant = new Animal("Dumbo");
const dog = new Dog("Jake", "auauu");
