// Função que cria estrelas no conteiner
function createStars(containerId, numberOfStars) {
  const container = document.getElementById(containerId);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Tamanho aleatório para as estrelas
    const starSize = Math.random() * 2 + 1; // Entre 1px e 3px
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;

    // Posição aleatória para as estrelas dentro do contêiner
    star.style.top = `${Math.random() * 230}%`;
    star.style.left = `${Math.random() * 100}%`;

    container.appendChild(star);
  }
}

// Chama a função para criar 500 estrelas no contêiner
createStars("container", 500);

// Lista de ids
const idMensagens = {
  senior: "Você clicou no Sênior.",
  hub: "Você clicou no Hubsoft.",
  playg: "Você clicou no Playgroud.",
  otrs: "Você clicou no otrs.",
  geomap: "Você clicou no geomap.",
  canva: "Você clicou no canva",
};

// função que cria uma div na tela com Descricão da ferramenta
function descricao(event) {
  const idClicado = event.target.id;
  const descricao = document.getElementById("container-subtitle");

  if (idMensagens[idClicado]) {
    const msgDesc = document.createElement("div");
    msgDesc.classList.add("description");
    msgDesc.textContent = idMensagens[idClicado];
    descricao.appendChild(msgDesc);

    msgDesc.addEventListener("click", function () {
      this.parentNode.removeChild(this);
    });
  }
}

document.querySelectorAll(".clicar").forEach((div) => {
  div.addEventListener("click", descricao);
});
