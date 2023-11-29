var swiper = new Swiper('.swiper--preview-img', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

});

var swiper = new Swiper('.swiper--view-img', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  }

});

function sumar() {
  var inputElement = document.getElementById("product__add-card-number");
  var valorActual = parseInt(inputElement.value);
  inputElement.value = valorActual + 1;
}

function restar() {
  var inputElement = document.getElementById("product__add-card-number");
  var valorActual = parseInt(inputElement.value);
  if (valorActual > 1) {
    inputElement.value = valorActual - 1;
  }
}