const printSolution = (result) => {
  console.log(result.message);

  if ("x1" in result) console.log(`x1 = ${result.x1}`);
  if ("x2" in result) console.log(`x2 = ${result.x2}`);
};

function printEquation({ a, b, c }) {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
}

export { printSolution, printEquation };
