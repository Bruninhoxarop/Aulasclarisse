// funções data e horário (Date)
// 1. Date() -> cria uma data/hora atual.
// 2. getFullYear() -> obtém o ano.
// 3. getMonth() -> obtém o mês.
// 4. getDate() -> obtém o dia do mês.
// 5. getHours() -> obtém as horas.
// 6. getMinutes() -> obtém os minutos.
// 7. getSeconds() -> obtém os segundos.

//Q1
function mostrarHora() {
  let agora = new Date();
  let hora = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();
  alert("Hora atual: " + hora + ":" + minutos + ":" + segundos);
}

// 1. Math.PI → constante π.
// 2. Math.round(x) → arredonda x.
// 3. Math.floor(x) → arredonda para baixo.
// 4. Math.ceil(x) → arredonda para cima.
// 5. Math.random() → número aleatório de 0 a 1.
// 6. Math.max(x, y, ...) → maior número.
// 7. Math.min(x, y, ...) → menor número.

//Q2
function numeroAleatorio() {
  let aleatorio = Math.round(Math.random() * 10);
  alert("Número aleatório: " + aleatorio);
}

function numeroAleatorio2() {
  let limite = Number(prompt("Digite o limite máximo:"));
  let aleatorio = Math.random() * limite;
  alert("Número aleatório: " + aleatorio);
}

function raizQuadrada() {
  let numero = 16;
  let raiz = Math.sqrt(numero);
  alert("A raiz quadrada de " + numero + " é: " + raiz);
}

//Q3
function raizQuadrada2() {
  let numero = Number(prompt("Escreva um número para ver a raiz quadrada"));
  let raiz = Math.sqrt(numero);
  alert("A raiz quadrada de " + numero + " é: " + raiz);
}

//Q4
function potencia() {
  let numero = Number(prompt("Digite um número:"));
  let potencia = Math.pow(numero, 2);
  alert("A potência ao quadrado de " + numero + " é: " + potencia);
}

//Q5
function mostrarNomes() {
  let nomes = ["Ana", "Carlos", "Beatriz", "João", "Pedro"];
  let i;
  for (i = 0; i < nomes.length; i++) {
    alert("Nome: " + nomes[i]);
  }
}

//Q6
function cadastrarPessoas() {
  let quantidade = Number(prompt("Quantas pessoas quer cadastrar?"));
  let pessoas = [];
  let i;
  let nome;

  for (i = 0; i < quantidade; i++) {
    nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    pessoas.push(nome);
  }

  for (i = 0; i < pessoas.length; i++) {
    alert("Pessoa cadastrada " + pessoas[i]);
  }
  //length retorna o nome em vez de caracteres por causa do [i]. [i] seria um array, array é uma caixa de textos basicamente
}
