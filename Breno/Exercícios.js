function somaIdades() {
    // Exercício 2: Operações com números inteiros
    let idadePessoa1 = parseInt(prompt("Qual a idade 1 ? "));
    let idadePessoa2 = 30; //Número inteiro
    let somaIdades = idadePessoa1 + idadePessoa2;

    alert("A soma das idades é " + somaIdades)
};

function media() {
    //Operações com decimais
    //Decimais é com "." e não ","
    let nota1 = parseFloat(prompt("Informe a primeira nota"));
    let nota2 = parseFloat(prompt("Informe a segunda nota"));
    let nota3 = parseFloat(prompt("Informe a terceira nota"));
    let nota4 = parseFloat(prompt("Informe a quarta nota"));
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("A nota final é " + media.toFixed(2))
};

function imc() {
    let peso = parseFloat(prompt("informe o seu peso"));
    let altura = parseFloat(prompt("informe a sua altura"));
    let imc = peso / (altura ** 2);
    //Os () fazem elevar primeiro q o resto
    //O (**) é potênciação
    alert("seu IMC é " + imc.toFixed(1));
}

function porcentagem() {

    let cliente = prompt("Informe seu nome");
    let valordoproduto = parseFloat(prompt("Valor do produto ?"));
    let valordodesconto = parseFloat(prompt("valor do desconto ?"));
    let calculo = valordoproduto * valordodesconto /100

    alert(cliente + ", você recebeu um desconto de " + valordodesconto + ". Você pagará apenas R$" + (valordoproduto - calculo));
}
//outro método.
valordescontado = (produto * (desconto/100));
valorfinal = produto - valordescontado