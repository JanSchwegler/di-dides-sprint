var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

let userinteraction = false;
swiper.on('touchStart', function() {
  userinteraction = true;
});

// swiper start animations
setTimeout(function() {
  if (!userinteraction) {
    startSliderAnimationFunction();
  }
}, 3000);


function startSliderAnimation() {
  setTimeout(function() {
    if (!userinteraction) {
      startSliderAnimationFunction();
    }
  }, 6000);
}

function startSliderAnimationFunction() {
  let swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.style.animation = 'none';
  setTimeout(function() {
      swiperWrapper.style.animation = '';
  }, 10);
  swiperWrapper.classList.add('start-animation');
  startSliderAnimation();
}