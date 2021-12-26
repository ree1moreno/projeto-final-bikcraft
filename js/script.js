// deixa o underline no menu ativo
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//faz com que ao clicar em comprar alguma bicicleta ou seguro, já venha selecionado o mesmo na página de orçamento