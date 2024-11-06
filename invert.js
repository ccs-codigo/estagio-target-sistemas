function inverterString(str) {
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma string para inverter: ", (entrada) => {
  const resultado = inverterString(entrada);
  console.log("String invertida:", resultado);
  rl.close();
});
