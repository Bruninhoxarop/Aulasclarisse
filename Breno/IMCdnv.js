function imcCal() {
  //let varia, const n varia, um texto fixo.

  const massa = parseFloat(document.getElementById("massa").value);
  //pegar o conteúdo (valor) escrito no html no input ou label com o mesmo Id.
  const altura = parseFloat(document.getElementById("altura").value);
  //pegar o conteúdo (valor) escrito no html no input ou label com o mesmo Id.
  const imc = massa / Math.pow(altura, 2);
  //const resultado = document.getElementById("resultado");
  document.getElementById("resultado").value = imc.toFixed(2)
  //Define o valor do input com id "resultado" como o imc do cálculo.
}