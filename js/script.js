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

const initSlider = () => {
  const carrosselTwoSlidesImgList = document.querySelector('.carrossel__two__slides .carrossel_two_slides__img__list');
  const slideButtons = document.querySelectorAll('.carrossel__two__slides .slide-button');
  const sliderScrollbar = document.querySelector('.carrossel__two .slider-scrollbar');
  const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');
  const maxScrollLeft = carrosselTwoSlidesImgList.scrollWidth - carrosselTwoSlidesImgList.clientWidth;

  scrollbarThumb.addEventListener('mousedown', (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    const handleMouseMove = (e) => {
    const deltaX = e.clientX -  startX;
    const newThumbPosition = thumbPosition + deltaX;
    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;


    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
    const scrollPosition = (boundedPosition / maxThumbPosition ) * maxScrollLeft;
    
    
    scrollbarThumb.style.left = `${boundedPosition}px`;
    carrosselTwoSlidesImgList.scrollLeft = scrollPosition;
    }

    const handleMouseUp = () => { 
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

    slideButtons.forEach(button => {
      button.addEventListener('click', () => {
       const direction = button.id === "prev-slide" ? -1 : 1;
       const scrollAmount = carrosselTwoSlidesImgList.clientWidth * direction;
       carrosselTwoSlidesImgList.scrollBy({ left: scrollAmount, behavior: "smooth"});
    });
  });

  const handeSlideButton = () => {
    slideButtons[0].style.display = carrosselTwoSlidesImgList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = carrosselTwoSlidesImgList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  const updateScrollThumbPosition = () => {
    const scrollPosition = carrosselTwoSlidesImgList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  
  carrosselTwoSlidesImgList.addEventListener("scroll", () => {
    handeSlideButton();
    updateScrollThumbPosition();
    });

}

window.addEventListener("load", initSlider);


//show me categorys 

function mostrarCategoria(categoria) {
  var conteudo = document.getElementById('conteudo');
  var categorias = conteudo.children;

  for (var i = 0; i < categorias.length; i++) {
    categorias[i].style.display = categorias[i].id === categoria ? 'block' : 'none';
  }
}