//Gerar um número aleatório entre 1 e 100
let numeroSecreto;
let tentativas;
let historicoPalpites;

function iniciarJogo(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    historicoPalpites = [];
    document.getElementById("mensagem").textContent = "";
    document.getElementById("tentativas").textContent = "Tentativas: 0";
    document.getElementById("histórico").textContent = "";
    document.getElementById("palpite").value = "";
}
//Função para verificar o palpite
function verificarPalpite() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");
    let tentativasTexto = document.getElementById("tentativas");
    let historicoTexto = document.getElementById("histórico");
    let somAcerto = document.getElementById("somAcerto");
    let somErro = document.getElementById("somErro");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent= "Por favor, digite um número entre 1 e 100.";
        mensagem.className = "errou mensagem";
        mensagem.style.opacity = 1;
        return;
    }

    if (historicoPalpites.includes(palpite)) {
        mensagem.textContent = "Você já tentou esse número!";
        mensagem.className = "errou mensagem";
        mensagem.style.opacity = 1;
        return;
    }

    tentativasRestantes--;
    historicoPalpites.push(palpite);

    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou`;
        mensagem.className = "acertou mensagem";
        mensagem.style.opacity = 1;
        somAcerto.play();
        return;
    } else {
        somErro.play();
        if (tentativasRestantes === 0) {
            mensagem.textContent = `😞 Game Over! O número era ${numeroSecreto}.`;
            mensagem.className = "errou mensagem";
        }else if (Math.abs(palpite - numeroSecreto) <= 5) {
            mensagem.textContent = "🔥 Muito perto!";
            mensagem.className = "errou mensagem";
        }else if (Math.abs(palpite - numeroSecreto) <= 15) {
            mensagem.textContent = "🌡️ Quente!";
            mensagem.className = "errou mensagem";
        }else if (Math.abs(palpite - numeroSecreto) <= 20){
            mensagem.textContent = "❄️ Frio!";
            mensagem.className = "errou mensagem";
        }
    }
    
    mensagem.style.opacity = 1;
    tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    historicoTexto.textContent = `Palpites anteriores :${historicoPalpites.join(", ")}`;
}
//Reiniciar o jogo
function reiniciarJogo() {
    iniciarJogo();
}
//Alternar entre modo escuro e claro
function alternarModoEscuro() {
    document.body.classList.toggle("modo-escuro");
}
//Iniciar o jogo na primeira execução
iniciarJogo();