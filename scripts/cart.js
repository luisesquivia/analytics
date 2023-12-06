const CART = {
  products: new Map(),
  subtotal: 0,
  fee: 0,
  total: 0,
}

const purchaseDetail = document.querySelector('.js-purchase-detail');

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
  }
};

/* Funtion updateTotalPrice input */
function updateTotalPrice() {
  const $totalPrice = document.querySelector('.js-summary-total-price');
  let total = 0;
  const elementos = document.querySelectorAll('.js-product-details');

  elementos.forEach(elemento => {
    const precio = parseFloat(elemento.getAttribute('data-product-price'));
    total += precio;
  });

  CART.products.forEach((product) => {
    total += product
  });

  $totalPrice.textContent = `$${total}`;
};

purchaseDetail.addEventListener('click', ({ target }) => {
  if (target.classList.contains('js-add-unit-to-product')) {
    const $parent = target.closest('.js-product-details');
    const $amount = $parent.querySelector('.js-product-add-card-number');
    const { productId, productPrice } = $parent.dataset;
    const amount = parseInt($amount.value ) + 1;

    CART.products.set(productId, parseInt(productPrice) * amount);

    sumar(target);
    updateTotalPrice();
  } else if (target.classList.contains('js-substract-unit-to-product')) {
    const $parent = target.closest('.js-product-details');
    const $amount = $parent.querySelector('.js-product-add-card-number');
    const { productId, productPrice } = $parent.dataset;
    const amount = parseInt($amount.value ) - 1;

    CART.products.set(productId, parseInt(productPrice) * amount);

    updateTotalPrice();
    restar(target);
  } 
});

window.onload = function() {
  updateTotalPrice();
};

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
      slidesPerView: 5,
      spaceBetween: 30,
    },

    1240: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1410: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1420: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1430: {
      slidesPerView: 3,
      spaceBetween: 12,
    },

    1460: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1490: {
      slidesPerView: 3,
      spaceBetween: 45,
    }
  }
});