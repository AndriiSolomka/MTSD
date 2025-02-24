"use strict";

import getCoefficients from "./src/getCoefficients.js";
import { printEquation, printSolution } from "./src/printSolution.js";
import { calculateEquation } from "./utils/quadraticEquation.js";
import { closeReadline } from "./utils/readline.js";

const main = async () => {
  const filePath = process.argv[2];

  const coefficients = await getCoefficients(filePath);
  printEquation(coefficients);

  const result = calculateEquation(coefficients);
  printSolution(result);

  closeReadline();
};

main();
