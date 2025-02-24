"use strict";

const calculateEquation = ({ a, b, c }) => {
  if (a === 0) {
    console.error('Coefficient "a" couldn`t be 0');
    process.exit(1);
  }
  const D = b * b - 4 * a * c;

  if (D > 0) {
    return {
      x1: (-b - Math.sqrt(D)) / (2 * a),
      x2: (-b + Math.sqrt(D)) / (2 * a),
      message: "There are 2 roots",
    };
  }

  if (D === 0) {
    return {
      x1: -b / (2 * a),
      message: "There are 1 roots",
    };
  }

  return { message: `There are 0 roots` };
};

export { calculateEquation };
