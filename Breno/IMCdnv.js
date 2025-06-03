function imc() {
  let massa = parseFloat(document.getElementById("massa").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let imc = massa / Math.pow(altura, 2);
  let resultado = document.getElementById("resultado");
  resultado.value = imc.toFixed(2);
}
