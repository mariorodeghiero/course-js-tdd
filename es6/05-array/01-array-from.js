// Array.from transforma a string em um array, disponibilizando todos metodos que é possivel usar em array normal. EX: .filter ; .find ; .indexOf

const text = 'Mário Rodeghiero';

console.log(Array.from(text));

const list = document.querySelectorAll('#list li');
const listArray = Array.from(list)
console.log(listArray);

const names = listArray.map((name) => name.textContent);

console.log(names);

