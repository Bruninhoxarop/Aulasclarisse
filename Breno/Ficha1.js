//Escrever um programa que recebea dois números e exiba o resultado da sua soma.
function soma() {
  let numero1 = parseInt(prompt("Digite um número "));
  let numero2 = parseInt(prompt("Digite um número "));
  let soma = numero1 + numero2;

  alert("A soma das idades é " + soma);
}

//Escrever um programa que receba dois numeros e ao final mostre a soma, subtração, multiplicação e a divisão dos númeors lidos.
function operacoesBasicas() {
  let numero3 = parseInt(prompt("Digite o primeiro número "));
  let numero4 = parseInt(prompt("Digite o segundo número "));

  let soma2 = numero3 + numero4;
  let subtração = numero3 - numero4;
  let multiplicação = numero3 * numero4;
  let divisão = numero3 / numero4;

  alert(soma2);
  alert(subtração);
  alert(multiplicação);
  alert(divisão);
}

//A loja Mamão com Acúçar está vendendo seus produtos em 5 (cinco) prestações sem juros. Faça um programa que receba um valor de uma compra e mostre o valor das prestações.
function mamaocomAcucar() {
  let valordecompra = parseFloat(prompt("Digite o valor do produto"));
  let prestações = valordecompra / 5;

  alert("Cada prestação será de R$" + prestações.toFixed(2));
}

//Escreva um programa para ler o raio de um círculo, calcular e escrever a sua área. Cálculo: área = PI*(raio²)
function areaCirculo() {
  let raio = parseFloat(prompt("Digite o valor do raio"));
  let area = Math.PI * raio ** 2;
  //area = 3.14*raio*raio;
  //area = 3.14**2

  alert(area.toFixed(2) + "m²");
}

//Escrever um programa para determinar o consumo médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total de combustível gasto.
function consumoMedio() {
  let distancia = parseFloat(prompt("Quantos KMs percorrido ?"));
  let combustivel = parseInt(
    prompt("Quantos litros de combustível foram gastos ?")
  );
  let calculo3 = distancia / combustivel;

  alert("O consumo médio do seu automóvel é" + calculo3);
}

//Escrever um programa que leia o nome de um aluno e as notas das três provas que ele obteve no semestre. No final informar o nome do aluno e a sua média (aritmética).
function mediadnv() {
  let nomeAluno = prompt("digite seu nome");

  let prova1 = parseFloat(prompt("Qual foi sua primeira nota ?"));
  let prova2 = parseFloat(prompt("Qual foi sua segunda nota ?"));
  let prova3 = parseFloat(prompt("Qual foi sua terceira nota ?"));
  let médiadosemestre = (prova1 + prova2 + prova3) / 3;

  alert(
    nomeAluno + " sua média desse semestre é, " + médiadosemestre.toFixed(1)
  );
}

//Escrever um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês
function comissao() {
  let nomevendedor = prompt("Teu nome CLTrouxa");
  let salariofixo = parseFloat(prompt("Quanto tu recebe mesmo ?"));
  let totaldevendas = parseFloat(
    prompt("Qual valor de vendas que fizeste este mês ?")
  );
  const COMISSAO = 0.15;//ou 15/100
  let bonus = totaldevendas * COMISSAO;

  alert(
    nomevendedor +
      ", que recebe R$" +
      salariofixo +
      ", receberá R$" +
      (salariofixo + bonus)
  );
}

//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
function conversao() {
  let tempemcelcius = parseFloat(
    prompt("Qual a temperatura do seu local em celcius ?")
  );
  let conversaodetemp = (9 * tempemcelcius) / 5 + 32;

  alert("Sua temperatura em Fahrenheit é " + conversaodetemp);
}

//Elaborar um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar(US$). O algoritmo deverá solicitar o valor da cotação do dólar e a quantidade de dólares disponíveis com o usuário.
function dolar() {
  let cotacaododolar = parseFloat(prompt("Qual o valor atual do Dólar ?"));
  let valor = parseFloat(prompt("Quanto você quer converter ?"));
  let conversaododolar = cotacaododolar * valor;

  alert("US$" + valor + " em reais é igual a R$" + conversaododolar);
}

//Faça um programa que receba um valor que foi depositado e exiba o valor com rendimento após um mês. Considere fixo o juro da poupança em 0.70% a. m. (ao mês)
function juros() {
  let deposito = parseFloat(prompt("Quanto você quer depositar ?"));
  let juro = deposito * 0.007 * 1;
  //calculo de juros = capital (ou seja, deposito) * taxa de juros ((0,70% /100) = 0.007) * tempo (em mês, como a questão pede)
  alert("Rendeu R$" + (deposito + juro).toFixed(2));
}

function qualquercoisa() {
let prod = parseFloat(prompt("Qual o valor do produto ?"))
let desc = parseFloat(prompt("Qual valor do desconto ?"))
let valordescontado = (prod * (desc / 100))
let valortotal = prod - valordescontado

alert("O que você pagará será de R$" + valortotal)
}

function consumoMedioDnv() {
let dist = parseFloat(prompt("Quantos KMs ?"))
let comb = parseFloat(prompt("Quantos Litros ?"))
let cal = dist / comb

alert("Consumo médio de " + cal + "Km/l")
}

function conversaoDnv() {
  let val = parseFloat(prompt("Quantos real cê tem aí ?"))
  let cot = parseFloat(prompt("Qual o valor do dólar agr ?"))
  let cal2 = val / cot

  alert("R$" + val + ", equivale a US$" + cal2.toFixed(2))
}

function latasdetinta() {
  let largura = parseFloat(prompt("Largura da parede ?"))
  let altura = parseFloat(prompt("Altura da parede ?"))
  let rendimento = parseFloat(prompt("Quanto rende essa tinta aí ? (em m²)"))
  let areatotal = largura * altura
  let tintasnecessaria = areatotal / rendimento

  alert ("A área da parede é" + areatotal + "m²")
  alert ("o rendimento da tinta é " + tintasnecessaria.toFixed(2) + "m²")
}
