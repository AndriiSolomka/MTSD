import rl from "./readline";

const getNumber = async (prompt) => {
  const input = await rl.question(prompt);
  const num = parseFloat(input);

  if (isNaN(num)) {
    console.error(`Error. Expected a valid real number, got "${input}"`);
    return getNumber(prompt);
  }

  return num;
};

export default getNumber;
