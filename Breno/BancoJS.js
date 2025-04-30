function bancoJS() {
  let saldo = 100;
  let saque;
  let deposito;
  let empréstimo;
  let parcelas;
  let valor_parcelas;
  let juros;
  let opção;

  do {
    opção = parseInt(
      prompt(
        "O que você deseja fazer \n1.Saldo \n2.Saque \n3.Deposito \n4.Empréstimo \n5.Sair"
      )
    );
    switch (opção) {
      case 1:
        alert("Seu saldo é R$" + saldo.toFixed(2));
        break;

      case 2:
        saque = parseFloat(prompt("Quantos R$ deseja sacar ?"));
        if (saque > saldo) {
          alert("Você tá liso amigo");
          alert(
            "Caso deseja fazer um empréstimo e se tornar nosso fiel escravo, aperte 4 no próximo bloco."
          );
        } else {
          saldo = saldo - saque;
          alert("Retire seu dinheiro");
          alert("Seu saldo atual é R$" + saldo.toFixed(2));
        }
        break;

      case 3:
        deposito = parseFloat(prompt("Quantos R$ deseja depositar ?"));
        saldo = saldo + deposito;
        alert("Você acabou de depositar R$" + deposito.toFixed(2));
        alert("Seu saldo atual é R$" + saldo.toFixed(2));
        break;

      case 4:
        empréstimo = parseFloat(prompt("Informe o valor do Empréstimo"));
        parcelas = parseInt(prompt("Informe no máximo 6 parcelas"));
        if (parcelas > 6) {
          alert("Número inválido");
          break;
        } else {
          alert("Número válido");
        }
        juros = empréstimo * 0.1 * parcelas;
        valor_parcelas = empréstimo / parcelas;
        alert("Você pagará R$" + valor_parcelas.toFixed(2) + " ao mês");
        saldo = saldo + empréstimo;
        alert("Seu novo saldo é R$" + saldo.toFixed(2));
        alert(
          "Parabéns 🎉, você se tornou nosso novo escravo, te vejo mês que vem 😊"
        );
        break;

      case 5:
        alert("Volte sempre!");
        break;
    }
  } while (opção != 5);
}
