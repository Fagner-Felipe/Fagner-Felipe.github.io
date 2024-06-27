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
const idArr = ["senior", "hub", "playg", "otrs", "geomap", "blip"];

// função que cria uma div na tela com Descricão da ferramenta
const mhub = document.getElementById("mhub");
const mSenior = document.getElementById("mSenior");
const mPlayg = document.getElementById("mPlayg");
const mOtrs = document.getElementById("mOtrs");
const mGeomap = document.getElementById("mGeomap");
const mBlip = document.getElementById("mBlip");
const seniorClose = document.getElementById("senior-close");
const hubClose = document.getElementById("hub-close");
const playgClose = document.getElementById("playg-close");
const otrsClose = document.getElementById("otrs-close");
const geomapClose = document.getElementById("geomap-close");
const blipClose = document.getElementById("blip-close");

function descricao(event) {
  const idClicado = event.target.id;

  if (idClicado == "hub") {
    mhub.showModal();
    hubClose.addEventListener("click", () => {
      mhub.close();
    });
  } else if (idClicado == "senior") {
    mSenior.showModal();
    seniorClose.addEventListener("click", () => {
      mSenior.close();
    });
  } else if (idClicado == "playg") {
    mPlayg.showModal();
    playgClose.addEventListener("click", () => {
      mPlayg.close();
    });
  } else if (idClicado == "otrs") {
    mOtrs.showModal();
    otrsClose.addEventListener("click", () => {
      mOtrs.close();
    });
  } else if (idClicado == "geomap") {
    mGeomap.showModal();
    geomapClose.addEventListener("click", () => {
      mGeomap.close();
    });
  } else if (idClicado == "blip") {
    mBlip.showModal();
    blipClose.addEventListener("click", () => {
      mBlip.close();
    });
  }
}

document.querySelectorAll(".clicar").forEach((div) => {
  div.addEventListener("click", descricao);
});
