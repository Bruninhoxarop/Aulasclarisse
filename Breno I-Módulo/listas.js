function listas1() {
  let frutas = ["maçã", " banana"];
  let item;
  item = prompt("Digite o item");
  frutas.push("laranja");
  frutas.push(item); // push adiciona texto na variável.
  alert(frutas); // ["maçã", "banana", "laranja"]
  alert("Total de frutas: " + frutas.length); // mostra em numérico.
  alert(frutas[2]); // mostra a fruta da posição, o início das posições é com 0.
}

function listas2() {
  let tarefas = ["estudar", "fazer exercício"];
  let lista = tarefas.join(", ");
  alert(lista); // "estudar", "fazer exercício"
}

function listas3() {
  let nomes = ["Lucas", "Ana", "Beatriz"];
  nomes.sort(); //ordena em ordem alfabética.
  alert(nomes);
}

function listas4() {
  let dia = 1;
  while (dia <= 5) {
    alert("Dia " + dia + ": Levantar cedo e estudar!");
    dia++;
  } // while repete o número até condição ser considerada feita
}

function listas5() {
  let tarefa;
  let lista = [];
  while (tarefa !== "sair") {
    tarefa = prompt("Digite uma tarefa (ou 'sair' para encerrar)");
    if (tarefa !== "sair") {
      lista.push(tarefa); // puxa o texto inserido na "tarefa" e adiciona em "lista"
    }
  }

  alert("Suas tarefas de hoje são:\n" + lista.join("\n")); // ou "-".
  alert("A tarefa mais importante é " + lista[1]);
}
function listas6() {
  listaCompras = [];

  let item;
  while (item !== "fim") {
    item = prompt("Digite um item da sua lista (ou 'fim' para encerrar)");
    if (item !== "fim") {
      listaCompras.push(item);
    }
  }
  alert("Sua lista de compras: \n" + listaCompras.join("\n"));
}

function listas7() {
  listaCompras = [];

  let item;
  while (item !== "fim") {
    item = prompt("Digite um item da sua lista (ou 'fim' para encerrar)");
    if (item !== "fim") {
      listaCompras.push(item);
    }
  }
  alert("Sua lista de compras: \n" + listaCompras.join("\n"));
}
