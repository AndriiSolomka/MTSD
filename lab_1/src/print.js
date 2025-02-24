const printSolution = (result) => {
  console.log(result.message);

  if ("x1" in result) console.log(`x1 = ${result.x1}`);
};

function printEquation({ a, b, c }) {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
}

export { printSolution, printEquation };
