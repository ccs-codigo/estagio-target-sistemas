# Repositório de Soluções dos Desafios - Estágio Target Sistemas

Este repositório contém as soluções para os desafios propostos no processo seletivo de estágio da **Target Sistemas**. Todos os desafios foram resolvidos utilizando **JavaScript** e **Node.js**.

## Desafios

### Questão 1:

**Descrição:**
Observe o trecho de código abaixo:
   
   int INDICE = 13, SOMA = 0, K = 0;
   Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
   Imprimir(SOMA);

Ao final do processamento, qual será o valor da variável `SOMA`?

[Link para o script da Questão 1](https://github.com/ccs-codigo/estagio-target-sistemas/blob/main/sumResult.js)

---

### Questão 2: Verificação de Número na Sequência de Fibonacci

**Descrição:**
Escreva um programa que, dado um número, calcule a sequência de Fibonacci e retorne uma mensagem informando se o número pertence ou não à sequência.

[Link para o script da Questão 2](https://github.com/ccs-codigo/estagio-target-sistemas/blob/main/fibonacci.js)

---

### Questão 3: Estatísticas de Faturamento Diário

**Descrição:**
Dado um vetor com o valor de faturamento diário de uma distribuidora, calcule e retorne:
- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- O número de dias no mês em que o valor de faturamento foi superior à média mensal.

[Link para o script da Questão 3](https://github.com/ccs-codigo/estagio-target-sistemas/blob/main/calcFaturamento.js)

---

### Questão 4: Percentual de Representação por Estado

**Descrição:**
Com os seguintes valores de faturamento mensal por estado, calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Faturamento por Estado:**
- SP: R$67.836,43
- RJ: R$36.678,66
- MG: R$29.229,88
- ES: R$27.165,48
- Outros: R$19.849,53

[Link para o script da Questão 4](https://github.com/ccs-codigo/estagio-target-sistemas/blob/main/statePercent.js)

---

### Questão 5: Inversão de Caracteres de uma String

**Descrição:**
Escreva um programa que inverta os caracteres de uma string sem usar funções prontas, como `reverse()`.

[Link para o script da Questão 5](https://github.com/ccs-codigo/estagio-target-sistemas/blob/main/invert.js)

---

## Como Rodar o Código

Para rodar qualquer uma das soluções, basta ter o Node.js instalado. Você pode seguir os seguintes passos:

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/estagio-target-sistemas.git

2. Navegue até o diretório do repositório:
   ```bash
   cd estagio-target-sistemas

3. Execute o código referente a cada questão diretamente com o Node.js:
   ```bash
   node sumResult.js
   node fibonacci.js
   node calcFaturamento.js
   node statePercent.js
   node invert.js
