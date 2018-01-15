
class Animal{
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }

  hello() {
    console.log(`${this.sound} I'm a ${this.kind}`);
  }

  static info(){
    console.log("This is a class create animals");
  }

  get name() {
    console.log(`${this.sound} My name is Jake`);
  }

  set nikenam(nick) {
    this.nick = nick;
  }
}

const dog = new Animal("dog", "auauuu");

const cat = new Animal("cat", "meow");


console.log('------------------------------------');
console.log(dog.hello);
console.log('------------------------------------');
