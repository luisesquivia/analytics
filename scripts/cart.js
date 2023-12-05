let purchaseDetail = document.querySelector('.js-purchase-detail');

/* Funtion Sumar input*/
function sumar(target) {
  let inputElement = target.parentElement.querySelector('.js-product-add-card-number');
  let valorActual = parseInt(inputElement.value);
  inputElement.value = valorActual + 1;
}

/* Funtion Restar input */
function restar(target) {
  let inputElement = target.parentElement.querySelector('.js-product-add-card-number');
  let valorActual = parseInt(inputElement.value);
  if (valorActual > 1) {
    inputElement.value = valorActual - 1;
  };
};

purchaseDetail.addEventListener('click', (event) => {
  console.log(event)
  let target = event.target
  if (target.tagName === 'BUTTON') {
    if (target.dataset.action === 'add-to-cart') {
      sumar(target);
    }

    if (target.dataset.action === 'substract-to-cart') {
      restar(target);
    }
  };
});

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