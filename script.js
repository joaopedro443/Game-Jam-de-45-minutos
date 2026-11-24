let pontosJogador = 0;
let pontosComputador = 0;

function jogar(escolha) {
  let opcoes = ["pedra", "papel", "tesoura"];

  let computador = opcoes[Math.floor(Math.random() * 3)];

  if (escolha === computador) {
    document.getElementById("resultado").textContent = "Empate!";
  } else if (
    (escolha === "pedra" && computador === "tesoura") ||
    (escolha === "papel" && computador === "pedra") ||
    (escolha === "tesoura" && computador === "papel")
  ) {
    pontosJogador++;
    document.getElementById("resultado").textContent = "Você ganhou!";
  } else {
    pontosComputador++;
    document.getElementById("resultado").textContent = "Você perdeu!";
  }

  document.getElementById("jogador").textContent = pontosJogador;
  document.getElementById("computador").textContent = pontosComputador;
}

document.getElementById("pedra").addEventListener("click", function() {
  jogar("pedra");
});

document.getElementById("papel").addEventListener("click", function() {
  jogar("papel");
});

document.getElementById("tesoura").addEventListener("click", function() {
  jogar("tesoura");
});

document.getElementById("zerar").addEventListener("click", function() {
  pontosJogador = 0;
  pontosComputador = 0;

  document.getElementById("jogador").textContent = 0;
  document.getElementById("computador").textContent = 0;
  document.getElementById("resultado").textContent = "Placar zerado!";
});
