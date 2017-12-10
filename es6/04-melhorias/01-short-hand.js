let firstName = 'Mário Antônio';
let surname = 'Rodeghiero';
let age = 30;

const person = {
  firstName,
  surname,
  age,
  hello() {
    console.log('hello!!');
  }
}

console.log(person);
person.hello()
