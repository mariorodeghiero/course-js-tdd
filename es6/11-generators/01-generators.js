// Executa uma funçao e para, só executa a proxima quando é requizitada novamente.

function* genNames() {
  yield 'Mario';

  yield 'tofu';

  yield 'bento';
}

const names = genNames();

console.log('------------------------------------');
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log('------------------------------------');
