"use strict";
import fs from "node:fs/promises";

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, "utf8");
    const cleanedData = data.trim().replace(/\s+/g, " ");
    const [a, b, c] = cleanedData.split(" ").map(Number);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.error("Invalid file format");
      process.exit(1);
    }

    return { a, b, c };
  } catch (error) {
    console.error(`File ${path} does not exist`, error);
    process.exit(1);
  }
};

export default readFile;
