//text in animation

const fullText = "tudo feito com amor";

const textElement = document.getElementById("typing-text");

let currentIndex = 0;
let typingSpeed = 100;

function typeWriter() {
  if (currentIndex < fullText.length) {
    textElement.textContent += fullText.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

window.onload = typeWriter;

//hamburguer

const hamburguer = document.querySelector(".hamburguer");
const header__nav = document.querySelector(".header__nav");
const menuItems = document.querySelectorAll(".header__nav__list li a");
const main = document.querySelector("main");

hamburguer.addEventListener("click", () => {
  header__nav.classList.toggle("active");
  main.classList.toggle("menu-open");

  const headerContainer = document.querySelector(".header_container");
  const pageContent = document.querySelector(".page-content");

  if (header__nav.classList.contains("active")) {
    headerContainer.classList.add("hidden");
    pageContent.classList.add("hidden");
    main.style.overflow = 'hidden';
    
  } else {
    setTimeout(() => {
      headerContainer.classList.remove("hidden");
      pageContent.classList.remove("hidden");
      body.style.overflow = '';
    }, 800);
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    header__nav.classList.remove("active");
    main.classList.remove("menu-open");

    const headerContainer = document.querySelector(".header_container");
    const pageContent = document.querySelector(".page-content");

    headerContainer.classList.remove("hidden");
    pageContent.classList.remove("hidden");
    main.style.overflow = '';
  });
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    header__nav.classList.remove("active");
    const headerContainer = document.querySelector(".header_container");
    headerContainer.classList.remove("hidden");
  });
});


menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    header__nav.classList.remove("active");
    const headerContainer = document.querySelector(".header_container");
    headerContainer.classList.remove("hidden");
  });
});



//carrossel

let contador = 1;

setInterval(function () {
  document.getElementById("slide" + contador).checked = true;
  contador++;
  if (contador > 3) {
    contador = 1;
  }
}, 2000);
