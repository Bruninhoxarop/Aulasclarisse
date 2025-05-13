function validarNome() {
  let nome;

  do {
    nome = prompt("Digite seu nome");

    if (!nome || nome.length < 3) {
      alert("Nome inválido, tente novamente");
    }
  } while (!nome || nome.length < 3);
  alert("Bem vindo, " + nome);
  //"caso 'nome' esteja vazio ou caso nome tenha menos q 3 caracteres" reexiba o prompt.
}

function contador() {
  let i;

  for (i = 1; i <= 4; i++) {
    alert("Contei " + i);
  }
}

function tabuada() {
  let i;
  let tabuada = parseInt(prompt("Informe a Tabuada"));
  let resultado;

  for (i = 1; i <= 10; i++) {
    resultado = tabuada * i;
    alert(tabuada + " X " + i + " = " + resultado);
  }
}
// (=) igual
// ("!=") diferente
// (!) não. Exemp: !nome, se n tiver nome nenhum no prompt, o código dá erro.
// ("length") caracteres. Exemp: nome.length<3 (se nome tiver menos q 3 caracteres.)
// (||) ou, retorna o valor TRUE caso tenha apenas um operando verdadeiro;
// (&&) e, retorna o valor TRUE caso todos os operando seja verdadeiro
// (%) resto
// (for) função de repetição
// for (i = 1; i <= 10; i++) "i" igual a 1; "i" menor ou igual a 10; "i" contando.
