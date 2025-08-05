function taxi() {
  let bandeira = 5.0;
  let valorkm = 2.2;
  let km = parseFloat(prompt("Quantos KMs percorrido ?"));
  let valorapagar = bandeira + valorkm * km;

  alert("Você pagará " + valorapagar);
}

function velocidade() {
  let distancia = parseFloat(prompt("Distância total percorrida ?"));
  let tempo = parseFloat(prompt("Tempo total da viagem"));
  let velocidademedia = distancia / tempo;

  if (velocidademedia >= 100) {
    alert("Excesso de velocidade!!");
  } else {
    alert("Sua velocidade média é de " + velocidademedia.toFixed(2) + " Km");
  }
}

function desconto() {
  let valor = parseFloat(prompt("Qual o valor da compra ?"));
  let desconto;
  //let "desconto" vazio dentro dos ifs modificam o valor mesmo assim.
  if (valor <= 100.0) {
    desconto = valor * 0.05;
    alert("Valor de desconto " + desconto);
  } else if (valor > 100.01 && valor <= 500.0) {
    desconto = valor * 0.1;
    alert("Valor de desconto " + desconto);
  } else {
    desconto = valor * 0.15;
    alert("Valor de desconto " + desconto);
  }

  alert("Valor final de " + (valor - desconto).toFixed(2));
}

function Renda() {
  let salario = parseFloat(prompt("Informe seu salário atual"));
  let INSS;
  //let "INSS" vazio dentro dos ifs modificam o valor mesmo assim.
  if (salario <= 1412.00) {
    INSS = salario * 0.075;
  } else if (salario > 1412.01 && salario < 2666.68) {
    INSS = salario * 0.09;
  } else if (salario > 2666.69 && salario < 4000.03) {
    INSS = salario * 0.12;
  } else {
    INSS = salario * 0.14;
  }
  alert("INSS R$" + INSS.toFixed(2));

  let FGTS = salario * 0.08;
  alert("FGTS R$" + FGTS.toFixed(2));

  let salariototal = salario - INSS
  alert("Salário Líquido " + salariototal.toFixed(2));
}
