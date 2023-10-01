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
const slidesNum = 9;
var swiper = new Swiper('.slider-container', {
freeMode: false,
freeModeSticky: true,
autoHeight: true,
loop: true,
loopAdditionalSlides: slidesNum,
loopedSlides: slidesNum,
slidesPerGroup: 1,
slidesPerView: 'auto',
speed: 700,
breakpoints: {
  576: {
    spaceBetween: 40
  }
}
});

swiper.on('slideChange', function () {
  const activeIndex = swiper.realIndex;
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
