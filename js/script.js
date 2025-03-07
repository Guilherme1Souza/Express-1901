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

//carrossel_two 
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
  
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});


const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("arrastando");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = falso;
    carousel.classList.remove("arrastando");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", arrastando);
carousel.addEventListener("touchmove", arrastando);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


//show me categorys 

function mostrarCategoria(categoria) {
  var conteudo = document.getElementById('conteudo');
  var categorias = conteudo.children;

  for (var i = 0; i < categorias.length; i++) {
    categorias[i].style.display = categorias[i].id === categoria ? 'block' : 'none';
  }
}