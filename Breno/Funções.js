if (a) {
} else if (a) {
} else {
}

switch (a) {
  case 1:
    alert("Mensagem");
  case 2:
    alert("Mensagem");
  case 3:
    alert("Mensagem");
  default:
    alert("Mensagem");
}

function opcao() {
  let opcao = parseInt(
    prompt("Informe a sua opção: \n1-Suco \n2-Salada \n3-Bolo \n4-Frutas")
  );

  switch (opcao) {
    case 1:
      alert("O suco é R$ 5,00");
      break;
    case 2:
      alert("A salada é R$ 10,00");
      break;
    case 3:
      alert("O bolo é R$ 5,00");
      break;
    case 4:
      alert("Frutas é R$ 7,00");
      break;
    default:
      alert("Opção inválida");
  }
}

function opcao2() {
  let opcao2 = parseInt(
    prompt("Escolha um nº: \n1-Suco \n2-Salada \n3-Bolo \n4-Frutas")
  );
  if (opcao2 == 1) {
    alert("Você escolheu Suco");
  } else if (opcao2 == 2) {
    alert("Você escolheu Salada");
  } else if (opcao2 == 3) {
    alert("Você escolheu Bolo");
  } else if (opcao2 == 4) {
    alert("Você escolheu Frutas");
  } else {
    alert("Opção inválida");
  }
}

function opcao3() {
  let opcao3 = prompt("Digite a palavra: \nsuco \nsalada \nbolo \nfrutas");

  switch (opcao3) {
    case "suco":
      alert("O suco é R$ 5,00");
      break;
    case "salada":
      alert("A salada é R$ 10,00");
      break;
    case "bolo":
      alert("O bolo é R$ 5,00");
      break;
    case "frutas":
      alert("Frutas é R$ 7,00");
      break;
    default:
      alert("Opção inválida");
  }
}

function calculadora() {
  let n1 = parseFloat(prompt("Informe o número"));
  let n2 = parseFloat(prompt("Informe o número"));
  let tipo = prompt("Informe a operação: \n+ \n- \n* \n/ \n^");

  switch (tipo) {
    case "+":
      resultado = n1 + n2;
      alert("A soma dos números é " + resultado);
      break;
    case "-":
      resultado = n1 - n2;
      alert("A subtração dos números é " + resultado);
      break;
    case "*":
      resultado = n1 * n2;
      alert("A multiplicação dos números é " + resultado);
      break;
    case "/":
      resultado = n1 / n2;
      alert("A divisão dos números é " + resultado);
      break;
    case "^":
      resultado = n1 ** n2;
      alert("A potênciação dos números é " + resultado);
      break;
    default:
      alert("Opção inválida");
  }
}

function coisas() {
  let op = parseInt(
    prompt(
      "O que você vai fazer hoje: \n1.Assistir filme \n2.Trabalhar \n3.Estudar"
    )
  );

  switch (op) {
    case 1:
      alert("Indico Todo Mundo em Pânico 5");
      break;
    case 2:
      alert("Bom trabalho!! 😊");
      break;
    case 3:
      alert("Estude Lógica da Programação 🤓");
      break;
    default:
      alert("Digite uma opção válida");
  }
}

do {} while (a);
//do while cria um loop até fizer oq o while pede

function sla() {
  let op2;
  do {
    op2 = parseInt(
      prompt(
        "O que você vai fazer hoje: \n1.Assistir filme \n2.Trabalhar \n3.Estudar"
      )
    );
    switch (op2) {
      case 1:
        alert("Indico Todo Mundo em Pânico 5");
        break;
      case 2:
        alert("Bom trabalho!! 😊");
        break;
      case 3:
        alert("Estude Lógica da Programação 🤓");
        break;
      default:
        alert("Digite uma opção válida");
        break;
    }
  } while (op2 !== 1 && op2 !== 2 && op2 !== 3);
  //Se for diferente de (comparação) 1, 2 ou 3, ele repete.
}

function contador() {
  let cont = 1;
  do {
    alert("O sistema está contando " + cont);
    cont++;
  } while (cont <= 5);
  //Enquanto o cont for abaixo de 5, ele repete.
}

function banco() {
  let saldo = 100;
  let saque;
  let deposito;
  let opção;

  do {
    opção = parseFloat(
      prompt(
        "O que você deseja saber \n1.Saldo \n2.Saque \n3.Deposito \n4.Sair"
      )
    );
    switch (opção) {
      case 1:
        alert("Seu saldo é " + saldo);
        break;
      case 2:
        saque = parseFloat(prompt("Quantos R$ deseja sacar ?"));
        if (saque > saldo) {
          alert("Você tá liso amigo");
        } else {
          alert("Você sacou " + saque);
        }
        break;
      case 3:
        deposito = parseFloat(prompt("Quantos R$ deseja depositar ?"));
        if (deposito > saldo) {
          alert("Você não pode depositar essa quantia");
        } else {
          alert("Você depositou " + deposito);
        }
        break;
    }
  } while (opção != 4);
  //Enquanto opção for diferente de 4, o sistema reexibe o prompt.
}
