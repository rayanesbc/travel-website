// INSERINDO FUNCIONALIDADES DOS ÍCONES DE MENU HAMBURGUER E X
const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
let numerosJaAnimados = false;

function handleMenu() {
  menus.classList.add("display");
}

function handleClose() {
  menus.classList.remove("display");
}

menuBtn.addEventListener("click", handleMenu);

closeBtn.addEventListener("click", handleClose);

// INSERINDO SCROLL FIXO AO ROLAR A PÁGINA
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// FUNÇÃO PARA ANIMAR OS NÚMEROS
function animaNumeros() {
  if (numerosJaAnimados) return;
  const numeros = document.querySelectorAll("[data-numero]");

  numeros.forEach((numero) => {
    const texto = +numero.innerText;
    const incremento = Math.floor(texto / 100);

    let start = 0;
    const intervalo = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > texto) {
        numero.innerText = texto;
        clearInterval(intervalo);
      }
    }, 25 * Math.random());
  });

  numerosJaAnimados = true;
}

// ACIONANDO A FUNÇÃO ANIMA NÚMEROS AO CHEGAR NO ELEMENTO
const element = document.querySelector(".static-wrapper");

function animaScroll() {
  // Altura da tela
  const setentaPorcentoWindow = window.innerHeight * 0.7;
  // Altura do elemento ao topo da página
  const sectionTop = element.getBoundingClientRect().top;
  const isSectionVisible = sectionTop - setentaPorcentoWindow < 0;

  if (isSectionVisible) {
    animaNumeros();
  }
}

window.addEventListener("scroll", animaScroll);
