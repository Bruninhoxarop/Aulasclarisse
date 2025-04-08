//Q1
function maiorIdade() {
  let idade = prompt("Informe sua idade");
  if (idade >= 18) {
    alert("You are maior de idade ");
  } else {
    alert("You are menor de idade");
  }
}
//if(){}
//else{}

//Q2
function par() {
  let num = prompt("Informe um número");
  if (num % 2 == 0) {
    alert("o número é par");
  } else {
    alert("o número é impar");
  }
  //(num % 2 ==0) se num / por 2 restar 0
}
//a=5 ("valor")
//5==5 (comparação)
//5===5 (comparação em valor e visual)

//Q3
function vendas() {
  let valor = parseFloat(prompt("Informe o valor da compra"));
  let meiodecompra = prompt(
    "Digite 1 para pagamento a vista ou 2 para pagamento parcelado"
  );
  let juros = valor * 0.05;
  if (meiodecompra == 1) {
    alert("você pagará R$" + valor);
  } else {
    alert(
      "você pagará R$" +
        juros +
        " de juros, sendo o total de R$" +
        (valor + juros).toFixed(2)
    );
  }
}

//Q4
function plano() {
  let plano = prompt("Plano A ou B");
  let valor = 29.9;
  let taxa1 = 10.0;
  let taxa2 = 15.0;
  if (plano === "A") {
    alert("valor de R$" + (valor + taxa1).toFixed(2));
  } else {
    alert("valor de R$" + (valor + taxa2).toFixed(2));
  }
}

//Q5
function classificação() {
  let idade = parseInt(prompt("Fale sua idade"));
  if (idade < 18) {
    alert("Menor de idade");
  } else if (idade >= 18 && idade <= 59) {
    alert("Adulto");
  } else {
    alert("Idoso");
  }
}
//OUUUU coloco idade > 59 (idade menor que 59, já que abaixo de 18 é menor mesmo)

//Q6
function resultadofinal() {
  let nota = parseFloat(prompt("Fala teu resquício de nota aí"));
  if (nota >= 7.0) {
    alert("Passasse, sortudo");
  } else if ((nota >= 5.0) & (nota <= 6.9)) {
    alert("Recuperação boeeeeeeeee");
  } else {
    alert(
      "REPROVADO OTARO KAKKAKAKAKAKAKAKAKKAKAKAKAKAKAKAKAKKAKAKAKAKAKKAKAKAKAKAKAKKAKAKAKAKAKAKAKAKAKKAKAKAKAKKAKAKAA"
    );
  }
}

//Q7
function estadoTemp() {
  let temperatura = parseFloat(prompt("Qual a temperatura atual ?"));
  if (temperatura <= 15) {
    alert("Friozin");
  } else if ((temperatura >= 16) & (temperatura <= 30)) {
    alert("Legal");
  } else {
    alert("Quentin");
  }
}

//Q8
function tarifa() {
  let horas = parseFloat(prompt("Quantas horas ?"));
  if (horas <= 2) {
    alert("Pagará R$" + 5.0);
  } else if ((horas >= 3) & (horas <= 5)) {
    alert("Pagará R$" + 10.0);
  } else {
    alert("Pagará R$" + 15.0);
  }
}

//Q9
function desconto() {
  let valordecompra = parseFloat(prompt("Qual o valor do produto ?"));
  let dez = valordecompra * 0.1;
  let cinco = valordecompra * 0.05;
  if (valordecompra > 100) {
    alert("Pagará R$" + (valordecompra - dez));
  } else if ((valordecompra >= 50) & (valordecompra <= 100)) {
    alert("Pagará R$" + (valordecompra - cinco));
  } else {
    alert("Pagará R$" + valordecompra);
  }
}

//Q10
function comparação() {
  let um = parseInt(prompt("Digite o número 1"));
  let dois = parseInt(prompt("Digite o número 2"));
  if (um > dois) {
    alert(um + " é maior");
  } else if (um < dois) {
    alert(dois + " é maior");
  } else {
    alert("Os dois são iguais");
  }
}

//Q11
function bissexto() {
  let ano = parseInt(prompt("Digite um ano"));
  if (ano % 4 == 0) {
    alert("Esse ano é bissexto");
  } else alert("Esse ano não é bissexto");
}
//(ano % 4==0 && ano % 100 !=0 || ano % 400 == 0) (!= significa "diferente") (|| significa "ou")

function imc2() {
  let peso2 = parseFloat(prompt("informe o seu peso"));
  let altura2 = parseFloat(prompt("informe a sua altura"));
  let imc2 = peso2 / altura2 ** 2;
  alert("Seu IMC " + imc2.toFixed(1));

  if (imc2 < 18.5) {
    alert("Abaixo do peso");
  } else if (imc2 >= 18.5 && imc2 <= 24.9) {
    alert("Peso ideal");
  } else if (imc2 >= 25 && imc2 <= 29.9) {
    alert("Levemente acima do peso");
  } else if (imc2 >= 30 && imc2 <= 34.9) {
    alert("Obesidade grau I");
  } else if (imc2 >= 35 && imc2 <= 39.9) {
    alert("Obesidade grau II (severa)");
  } else {
    alert("Obesidade III (mórbida)");
  }
}
