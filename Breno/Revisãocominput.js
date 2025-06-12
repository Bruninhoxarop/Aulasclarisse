function calularRaiz(){
    let num = parseInt(document.getElementById("numero").value);
    let raiz = Math.sqrt(num);

    document.getElementById("resultado").value = raiz;
}