function calcRaiz() {
  let num = parseInt(document.getElementById("numero").value);
  let raiz = Math.sqrt(num);

  document.getElementById("resultado").value = raiz;
}

function mostrarMensagem() {
  let opcao = parseInt(document.getElementById("selecao").value);
  let texto = "";

  switch (opcao) {
    case 1:
      texto = "Você torce para o Brasil!";
      break;
    case 2:
      texto = "Você torce para o Paraguai!";
      break;
    case 3:
      texto = "Você torce para o Argentina!";
      break;
    default:
      texto = "Opção inválida. Escolha 1, 2 ou 3.";
  }

  document.getElementById("mensagem").textContent = texto;
}

function calcularMedia() {
  let nome = document.getElementById("nome").value;
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let media = (nota1 + nota2) / 2;

  document.getElementById(
    "resultado"
  ).textContent = `Aluno : ${nome} | Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media.toFixed(
    1
  )}`;
}

function avaliarAluno() {
  let nomeAluno = document.getElementById("nomeAluno").value;
  let notaA = Number(document.getElementById("notaA").value);
  let notaB = Number(document.getElementById("notaB").value);
  let mediadnv = (notaA + notaB) / 2;

  let situacao = mediadnv >= 7 ? "Aprovado" : "Reprovado";

  document.getElementById(
    "mensagemFinal"
  ).textContent = `Aluno : ${nomeAluno} | Média: ${mediadnv.toFixed(
    1
  )} | Situação: ${situacao}`;
}
