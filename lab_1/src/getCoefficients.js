"use strict";

import getNumber from "../utils/getNumber.js";
import readFile from "../utils/readFile.js";

const getCoefficients = async (filePath) => {
  if (filePath) {
    return await readFile(filePath);
  }

  const a = await getNumber("Input a: ");
  const b = await getNumber("Input b: ");
  const c = await getNumber("Input c: ");

  return { a, b, c };
};

export default getCoefficients;
