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
const idArr = ["senior", "hub", "plaug", "otrs", "geomap"];

// função que cria uma div na tela com Descricão da ferramenta
const mhub = document.getElementById("mhub");
const hubClose = document.getElementById("hub-close");

function descricao(event) {
  const idClicado = event.target.id;

  if (idClicado == "hub") {
    mhub.showModal();
    hubClose.addEventListener("click", () => {
      mhub.close();
    });
  }
}

document.querySelectorAll(".clicar").forEach((div) => {
  div.addEventListener("click", descricao);
});
