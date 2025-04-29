function bancoJS() {
  let saldo = 100;
  let saque = 0;
  let deposito = 0;
  let empréstimo;
  let opção;

  do {
    opção = parseFloat(
      prompt(
        "O que você deseja fazer \n1.Saldo \n2.Saque \n3.Deposito \n4.Impréstimo \n5.Sair"
      )
    );
    switch (opção) {
      case 1:
        alert("Seu saldo é R$" + saldo);
        break;

      case 2:
        saque = parseFloat(prompt("Quantos R$ deseja sacar ?"));
        if (saque > saldo) {
          alert("Você tá liso amigo");
          soliemprestimo = prompt(
            "Deseja se tornar nosso fiel escravo e fazer um empréstimo ? \n1.SIM \n2.NÃO"
          );


          
        } else {
          saldo = saldo - saque;
          alert("Retire seu dinheiro");
          alert("Seu saldo atual é R$" + saldo);
        }
        break;

      case 3:
        deposito = parseFloat(prompt("Quantos R$ deseja depositar ?"));
        saldo = saldo + deposito;
        alert("Você acabou de depositar R$" + deposito);
        alert("Seu saldo atual é R$" + saldo);
        break;

      case 4:
        empréstimo = parseFloat(prompt("Informe o valor do Empréstimo"));
        saldo = saldo + empréstimo;
    }
  } while (opção != 5);
}
