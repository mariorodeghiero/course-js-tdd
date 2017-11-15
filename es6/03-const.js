const secretNumber = 28;

const will = {
  name: 'Willian',
  age: 53
};

Object.freeze(will);

will.age = 26;

console.log(will);
