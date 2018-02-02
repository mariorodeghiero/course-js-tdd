

class Animal {
  constructor(name) {
    this.name = name;
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

function deg() {

}

const elephant = new Animal("Dumbo");
const dog = new Dog("Jake", "auauu");

const arr = [{
  name: "mario",
  age: 33,
  date: "12/30/2017",
  cat: true,
  dog: false
}]

function name() {
  return 2 + 2;
}

const gato = document.getElementById('dog');
let dogs = document.addEventListener('click')



