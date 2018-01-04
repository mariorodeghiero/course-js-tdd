function makeSandwich(bread, cheese, sauce) {
  console.log(`your  ${bread}  and ${cheese} and ${sauce} is done!!`);
}

const ingredients = ['white', 'cheddar', 'barbecue'];

console.log(makeSandwich(...ingredients));

