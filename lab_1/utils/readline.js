"use strict";
import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const closeReadline = () => rl.close();

export { rl, closeReadline };
