const state = ['SP', 'SC', 'RS'];

const love = state.map( function(name) {
  return `I love ${name}`;
});

console.log(love);

// ===================== Arrow ============================

const loveArrow = state.map((name) => {
  return `I love ${name}`;
});

console.log('loveArrow', loveArrow);

// ==================== Single =============================

const loveArrowSingle = state.map(name => {
  return `I love ${name}`;
});

console.log(loveArrowSingle);


// ==================== One ==============================

const loveArrowOneLine = state.map(name => `I love ${name}`);

console.log(loveArrowOneLine);


// ====================== filter + map ============================

const loveChain = state
                  .filter(name => name === "SC")
                  .map(name => `I love ${name}`);


console.log(loveChain);
