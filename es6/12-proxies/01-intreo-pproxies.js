/**
 * O objeto Proxy é usado para definir comportamentos customizados para operações fundamentais(por exemplo,
 * pesquisa de propriedade, atribuição, enumeração, invocação de função, verificar caracters e etc.).
 */

let obj = {
  name: 'mario',
  age: 30
}

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log('------------------------------------');
    console.log('Alguem esta solicitando o nome!');
    console.log('------------------------------------');
    return target[name];
  },

  set(target, name, value) {
    console.log('------------------------------------');
    console.log('Alguem esta alterando o nome!!!');
    console.log('------------------------------------');
    target[name] = value.toUpperCase();
  }
});

proxy.name = 'Mário Antônio do A. Rodeghiero'

console.log('------------------------------------');
console.log(proxy.name);
console.log('------------------------------------');


