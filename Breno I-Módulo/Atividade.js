// Funções data e horário (Date)
// 1. Date() -> cria uma data/hora atual.
// 2. getFullYear() -> obtém o ano.
// 3. getMonth() -> obtém o mês.
// 4. getDate() -> obtém o dia do mês.
// 5. getHours() -> obtém as horas.
// 6. getMinutes() -> obtém os minutos.
// 7. getSeconds() -> obtém os segundos.

// Exemplo: Mostrar Hora Atual
// function mostrarHora() {
// let agora = new Date();
// let hora = agora.getHours();
// let minutos = agora.getMinutes();
// alert("Hora atual: " + hora + ":" + minutos);
// }

//Q1
function mostrarHora() {
  let agora = new Date();
  let hora = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();
  alert("Hora atual: " + hora + ":" + minutos + ":" + segundos);
}

// Funções Matemáticas (Math)
// 1. Math.PI → constante π.
// 2. Math.round(x) → arredonda x.
// 3. Math.floor(x) → arredonda para baixo.
// 4. Math.ceil(x) → arredonda para cima.
// 5. Math.random() → número aleatório de 0 a 1.
// 6. Math.max(x, y, ...) → maior número.
// 7. Math.min(x, y, ...) → menor número.

// Função Math: Número Aleatório
// function numeroAleatorio() {
// let aleatorio = Math.random();
// alert("Número aleatório: " + aleatorio);
// }

//Q2
function numeroAleatorio() {
  let aleatorio = Math.round(Math.random() * 10);
  alert("Número aleatório: " + aleatorio);
}

// Número Aleatório até um Limite Digitado
// function numeroAleatorio2() {
//   let limite = Number(prompt("Digite o limite máximo:"));
//   let aleatorio = Math.random() * limite;
//   alert("Número aleatório: " + aleatorio);
// }

// Raiz Quadrada
// function raizQuadrada() {
//   let numero = 16;
//   let raiz = Math.sqrt(numero);
//   alert("A raiz quadrada de " + numero + " é: " + raiz);
// }

//Q3
function raizQuadrada() {
  let numero = Number(prompt("Escreva um número para ver a raiz quadrada"));
  let raiz = Math.sqrt(numero);
  alert("A raiz quadrada de " + numero + " é: " + raiz);
}

// Raiz Quadrada de um Número Inserido
// function raizQuadrada() {
// let numero = Number(prompt("Digite um número:"));
// let raiz = Math.sqrt(numero);
// alert("A raiz quadrada de " + numero + " é: " + raiz);
// }

//Q4
function potencia() {
  let numero = Number(prompt("Digite um número:"));
  let potencia = Math.pow(numero, 2);
  alert("A potência ao quadrado de " + numero + " é: " + potencia);
}

// Arrays e Métodos - Crie uma função que percorra um array de nomes e exiba cada um.
// function mostrarNomes() {
// let nomes = ["Ana", "Carlos", "Beatriz"];
// for (let i = 0; i < nomes.length; i++) {
// alert("Nome: " + nomes[i]);
// }
// }

//Q5
function mostrarNomes() {
  let nomes = ["Ana", "Carlos", "Beatriz", "João", "Pedro"];
  let i;
  for (i = 0; i < nomes.length; i++) {
    alert("Nome: " + nomes[i]);
  }
}

// Cadastro de Pessoas em um Array
// function cadastrarPessoas() {
//   let quantidade = Number(prompt("Quantas pessoas quer cadastrar?"));
//   let pessoas = [];
//   for (let i = 0; i < quantidade; i++) {
//     let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
//     pessoas.push(nome);
//   }
//   alert("Pessoas cadastradas: " + pessoas.join(", "));
// }

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
}

// Contar com Entrada de Limite
// function contar() {
//   let limite = Number(prompt("Digite até qual número deseja contar:"));
//   for (let i = 1; i <= limite; i++) {
//     alert("Número: " + i);
//   }
// }

//Q7
function contar() {
  let numero = Number(prompt("Digite em qual número começar:"));
  for (let i = numero; i >= 1; i--) {
    alert("Número: " + i);
  }
}

// Calculadora Simples
// function calculadora() {
// let operacao = prompt("Escolha a operação: +, -, *, /");
// let num1 = Number(prompt("Digite o primeiro número:"));
// let num2 = Number(prompt("Digite o segundo número:"));
// let resultado;
// if (operacao === "+") {
// resultado = num1 + num2;
// } else if (operacao === "-") {
// resultado = num1 - num2;
// } else if (operacao === "*") {
// resultado = num1 * num2;
// } else if (operacao === "/") {
// if(num2 !== 0) {
// resultado = num1 / num2;
// } else {
// resultado = "Divisão por zero não é permitida.";
// }
// } else {
// resultado = "Operação inválida.";
// }
// alert("Resultado: " + resultado);
// }

//Q8
function calculadora() {
  let operacao = prompt("Escolha a operação: +, -, *, ^, /");
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let resultado;
  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "^") {
    resultado = Math.pow(num1, num2);
  } else if (operacao === "/") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Divisão por zero não é permitida.";
    }
  } else {
    resultado = "Operação inválida.";
  }
  alert("Resultado: " + resultado);
}

// Validação de Senha - Solicita a senha ao usuário. Se correta, exibe "Acesso permitido", senão "Acesso negado".
// function validarSenha() {
// let senhaCorreta = "12345";
// let tentativa = prompt("Digite a senha:");
// if (tentativa === senhaCorreta) {
// alert("Acesso permitido.");
// } else {
// alert("Acesso negado.");
// }
// }

//Q9
function validarSenha() {
  let senhaCorreta = "12345";
  let tentativa;
  let limite = 2;

  // while (limite >= 0) {
  //   tentativa = prompt("Digite a senha:");
  //   if (tentativa === senhaCorreta) {
  //     alert("Acesso permitido.");
  //     break;
  //   } else if (limite === 0) {
  //     alert("Tentativas esgotadas");
  //     break;
  //   } else {
  //     alert("Acesso negado.");
  //     limite--;
  //   }
  // }

  for (i = limite; i >= 0; i--) {
    tentativa = prompt("Digite a senha:");
    if (tentativa === senhaCorreta) {
      alert("Acesso permitido.");
      break;
    } else if (i === 0) {
      alert("Tentativas esgotadas");
    } else {
      alert("Acesso negado.");
    }
  }
}

// Média de Notas: O usuário informa quantas notas quer inserir. O programa calcula a média e exibe.
// function mediaNotas() {
// let quantidade = Number(prompt("Quantas notas quer inserir?"));
// let soma = 0;
// for (let i = 1; i <= quantidade; i++) {
// let nota = Number(prompt("Digite a nota " + i + ":"));
// soma += nota;
// }
// let media = soma / quantidade;
// alert("A média das notas é: " + media.toFixed(2));
// }

//Q10
function mediaNotas() {
  let quantidade = Number(prompt("Quantas notas quer inserir?"));
  let soma = 0;
  for (let i = 1; i <= quantidade; i++) {
    let nota = Number(prompt("Digite a nota " + i + ":"));
    soma += nota;
  }
  let media = soma / quantidade;
  alert("A média das notas é: " + media.toFixed(2));
  if (media >= 7) {
    alert("Aprovado");
  } else {
    alert("Reprovado");
  }
}
