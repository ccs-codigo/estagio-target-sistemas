const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamento) {
  let totalFaturamento = 0;
  for (let estado in faturamento) {
    totalFaturamento += faturamento[estado];
  }

  for (let estado in faturamento) {
    let percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(
      `O estado ${estado} representa ${percentual.toFixed(
        2
      )}% do faturamento total.`
    );
  }
}

calcularPercentuais(faturamentoEstados);
