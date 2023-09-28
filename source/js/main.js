const body = document.body;
const footerBody = document.querySelector('.footer-body');
const footerHideButton = document.querySelector('.footer-hide');
footerBody.style.setProperty('--footer-body-height', footerBody.scrollHeight + 'px');

const hideFooterHandler = () => {
  footerHideButton.classList.toggle('footer-hide--active');
  footerHideButton.classList.contains('footer-hide--active') ? footerBody.style.maxHeight = 0 : footerBody.style.maxHeight = '';
}

footerHideButton.addEventListener('click', hideFooterHandler);

if (Swiper) {

}

var swiper = new Swiper('.slider-container', {
  slidesPerView: 'auto',
  spaceBetween: 14,
  speed: 700,
  breakpoints: {
    768: {
      spaceBetween: 40
    }
  }
});
