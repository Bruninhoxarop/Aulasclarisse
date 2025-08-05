function calcularRaiz() {
    let numero = parseInt(document.getElementById("numero").value);
    let raiz = Math.sqrt(numero)
    document.getElementById("raiz").value = raiz.toFixed(2)
}