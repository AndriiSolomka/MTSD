"use strict";

const roots = {
  x1: null,
  x2: null,
};

const calculateEquation = ({ a, b, c }) => {
  if (a === 0) return false;

  const d = b * b - 4 * a * c;

  if (d > 0) {
    roots.x1 = (-b - Math.sqrt(d)) / (2 * a);
    roots.x2 = (-b + Math.sqrt(d)) / (2 * a);
    return `There are 2 roots\n x1 = ${roots.x1}\n x2 = ${roots.x2}`;
  }

  if (d === 0) {
    roots.x1 = -b / (2 * a);
    return `There are 1 roots\n x1 = ${roots.x1}`;
  }

  if (d < 0) return `There are 0 roots`;
};

export { calculateEquation };
