/*MENU*/
let menu = document.querySelector(".menuLinks");
let menuDois = document.querySelector("#menuBtn");

menuDois.onClick = () =>{
  menu.classList.toggle('active');
}

/*SCROLL */
window.onscroll = () =>{
  let topoSite = document.querySelector("header");
  topoSite.classList.toggle('sticky', window.scrollY > 100);
}

/*SLIDE*/
var swiper = new Swiper(".msSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*CONTADOR */
let campoConta = document.querySelectorAll('.numero');
let intervalo = 1000;

campoConta.forEach((campoConta) =>{
  let valorInicial = 0;
  let finalValor = parseInt(campoConta.getAttribute("msflix-c-valor"));
  let duracao = Math.floor(intervalo/finalValor);
  let contador = setInterval(function(){
    valorInicial += 1;
    campoConta.textContent = valorInicial;

    if(valorInicial == finalValor){
      clearInterval(contador);
    }
  }, duracao);
});

/*DEPOIMENTOS*/
var swiper = new Swiper(".meusDepoimentos", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024:{
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});