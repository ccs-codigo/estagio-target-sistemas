const fs = require("fs");

(function () {
  function analisarFaturamento(dados) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaValores = 0;
    let diasComFaturamento = 0;
    let diasAcimaDaMedia = 0;

    dados.forEach((dia) => {
      if (dia.valor > 0) {
        somaValores += dia.valor;
        diasComFaturamento++;

        if (dia.valor < menorValor) menorValor = dia.valor;
        if (dia.valor > maiorValor) maiorValor = dia.valor;
      }
    });

    const media = somaValores / diasComFaturamento;

    dados.forEach((dia) => {
      if (dia.valor > media) {
        diasAcimaDaMedia++;
      }
    });

    return {
      menorValor,
      maiorValor,
      mediaFaturamento: media,
      diasAcimaDaMedia,
    };
  }

  fs.readFile("faturamento.json", "utf8", (err, data) => {
    if (err) {
      console.log("Erro ao ler o arquivo:", err);
      return;
    }

    const faturamentoDiario = JSON.parse(data);

    const resultado = analisarFaturamento(faturamentoDiario);

    console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
    console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
    console.log(
      `Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`
    );
  });
})();
