function Jogo() {
  let númeroSecreto = Math.floor(Math.random() * 10) + 1;
    //math.floor só mostra a parte inteira do número.
    //math.random é entre 0 e 1, multiplicando por tal número, ele multiplica 0 ou 1 por tal número e dps deve adicionar mais 1.
  let tentativa;
  let cont = 0;

  do {
    tentativa = parseInt(prompt("Adivinha o número: "));
    cont++;
    //++ segue a contando
    if (tentativa != númeroSecreto) {
      alert("Errou!!!!! Tente novamente, já foram " + cont + "tentativas.");
    } else {
      alert("Parabéns, resposta certa");
    }
  } while (tentativa != númeroSecreto);
  //Enquanto tentativa for diferente de número secreto o prompt aparece novamente
  alert("Você acertou após " + cont + " tentativas");
}

function Senha() {
  let senha = 1234;
  let tent;

  do {
    tent = parseInt(prompt("Adivinha a senha: "));
    if (tent != senha) {
      alert("Errou!!!!! Tente novamente");
    } else {
      alert("Parabéns, senha certa");
    }
  } while (tent != senha);
  alert("Acesso liberado")
}
