function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult as multiplicacao, div };

export default sum;
