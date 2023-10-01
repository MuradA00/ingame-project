const body = document.body;
const footerBody = document.querySelector('.footer-body');
const footerHideButton = document.querySelector('.footer-hide');
const slider = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider-images__item');
const sliderInfoBlocks = document.querySelectorAll('.slider-info');

footerBody.style.setProperty('--footer-body-height', footerBody.scrollHeight + 'px');

const sliderImageHandler = () => {
  footerHideButton.classList.contains('footer-hide--active') ? images.forEach(image => image.classList.add('slider-images__item--large')) : images.forEach(image => image.classList.remove('slider-images__item--large'));
}

const hideFooterHandler = () => {
  footerHideButton.classList.toggle('footer-hide--active');
  footerHideButton.classList.contains('footer-hide--active') ? footerBody.style.maxHeight = 0 : footerBody.style.maxHeight = '';

  sliderImageHandler();
}

footerHideButton.addEventListener('click', hideFooterHandler);

var swiper = new Swiper('.slider-container', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  loop: true,
  initialSlide: 0,
  centerSlide: true,
  spaceBetween: 0,
  speed: 700,
  breakpoints: {
    768: {
      spaceBetween: 40
    }
  }
});

swiper.on('slideChange', function () {
  const activeIndex = swiper.realIndex; // Получаем индекс текущего активного слайда
  images.forEach((image, index) => {
      if (index === activeIndex) {
          image.classList.add('slider-images__item--active');
      } else {
          image.classList.remove('slider-images__item--active');
      }
  });
  sliderInfoBlocks.forEach((block, index) => {
    if (index === activeIndex) {
      block.classList.add('slider-info--active');
    } else {
      block.classList.remove('slider-info--active');
    }
  });
});

const sliderHandler = () => {
  const sliders = document.querySelectorAll('.swiper-slide');

  sliders[0].classList.add('swiper-slide-active');
}

if (Swiper) {
  sliderHandler();
}
