const printSolution = (result) => {
  console.log(result);
};

function printEquation({ a, b, c }) {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
}

export { printSolution, printEquation };
