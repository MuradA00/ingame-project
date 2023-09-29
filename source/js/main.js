const body = document.body;
const footerBody = document.querySelector('.footer-body');
const footerHideButton = document.querySelector('.footer-hide');
footerBody.style.setProperty('--footer-body-height', footerBody.scrollHeight + 'px');

const hideFooterHandler = () => {
  footerHideButton.classList.toggle('footer-hide--active');
  footerHideButton.classList.contains('footer-hide--active') ? footerBody.style.maxHeight = 0 : footerBody.style.maxHeight = '';
}

footerHideButton.addEventListener('click', hideFooterHandler);

var swiper = new Swiper('.slider-container', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  initialSlide: 1,
  spaceBetween: 14,
  speed: 700,
  longSwipes: false,
  breakpoints: {
    768: {
      spaceBetween: 40
    }
  }
});

const slider = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider-images__item');
swiper.on('slideChange', function () {
    const activeSlide = slider.querySelector('.swiper-slide-active');
    const slideOrder = activeSlide.getAttribute('data-order');
    images.forEach((image) => {
        const imageOrder = image.getAttribute('data-order');
        if (imageOrder === slideOrder) {
            image.classList.add('slider-images__item--active');
        } else {
            image.classList.remove('slider-images__item--active');
        }

    });
});
