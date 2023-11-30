const swiperPreview = new Swiper('.js-swiper-preview-img', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

});

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

function sumar() {
  let inputElement = document.querySelector('.js-product__add-card-number');
  let valorActual = parseInt(inputElement.value);
  inputElement.value = valorActual + 1;
}

function restar() {
  let inputElement = document.querySelector('.js-product__add-card-number');
  let valorActual = parseInt(inputElement.value);
  if (valorActual > 1) {
    inputElement.value = valorActual - 1;
  }
}