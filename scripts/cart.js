let numProducts = document.querySelector('.js-number-product');
let numProduct = numProducts.textContent;

/* Funtion Sumar input*/
function sumar() {
  let inputElement = document.querySelector('.js-product-add-card-number');
  let valorActual = parseInt(inputElement.value);
 
  if (numProduct >= 1) {
    inputElement.value = valorActual + 1;
  }else{
    alert("No hay productos disponibles")
  }
}

const botonSumar = document.querySelector('.js-add-unit-to-product');
botonSumar.addEventListener('click', sumar);

/* Funtion Restar input */
function restar() {
  let inputElement = document.querySelector('.js-product-add-card-number');
  let valorActual = parseInt(inputElement.value);
  if (valorActual > 1) {
    inputElement.value = valorActual - 1;
  }
}

const botonRestar = document.querySelector('.js-substract-unit-to-product');
botonRestar.addEventListener('click', restar);

const swiper = new Swiper('.js-swiper', {
  navigation: {
    nextEl: '.js-swiper-button-next',
    prevEl: '.js-swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {

    clickable: true,
  },

  breakpoints: {

    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
});