import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isFibonacci(num) {
  if (num < 0) return false;

  let fib1 = 0,
    fib2 = 1;
  while (fib2 < num) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }
  return fib2 === num;
}

rl.question("Digite um número: ", (input) => {
  const num = parseInt(input, 10);

  if (isNaN(num) || num < 0) {
    console.log("Por favor, digite um número válido e não negativo.");
  } else if (isFibonacci(num)) {
    console.log(`O número ${num} faz parte da sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não faz parte da sequência de Fibonacci.`);
  }

  rl.close();
});
