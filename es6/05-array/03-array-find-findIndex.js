const data = [
  {
    name: "bento",
    age: 3,
    city: "floripa"
  },
  {
    name: "tofu",
    age: 6,
    city: "floripa"
  }
]

const cat = data.find(animal => animal.name === "bento");
const catIndex = data.findIndex(animal => animal.name === "tofu");

console.log(cat);
console.log(catIndex);
