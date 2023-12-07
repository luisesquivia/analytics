/* Slider vista img grande */
const swiperPreview = new Swiper('.js-swiper-preview-img', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

});

/* Slider vista preview */
const swiperView = new Swiper('.js-swiper-view-img', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperPreview,
  }

});

/* Funtion Sumar input*/
function sumar() {
  let inputElement = document.querySelector('.js-product-add-card-number');
  let valorActual = parseInt(inputElement.value);
  inputElement.value = valorActual + 1;
}

let botonSumar = document.querySelector('.js-add-unit-to-product');
botonSumar.addEventListener('click', sumar);

/* Funtion Restar input */
function restar() {
  let inputElement = document.querySelector('.js-product-add-card-number');
  let valorActual = parseInt(inputElement.value);
  if (valorActual > 1) {
    inputElement.value = valorActual - 1;
  }
}

let botonRestar = document.querySelector('.js-substract-unit-to-product');
botonRestar.addEventListener('click', restar);

