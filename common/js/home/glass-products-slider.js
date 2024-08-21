const params = {
  autoplay: {
    delay: 5000,
  },
};

const swiperEl = document.querySelector(".glass-products-slider");
const buttonNextEl = document.querySelector(".swiper_next_btn");
const buttonPrevEl = document.querySelector(".swiper_prev_btn");

buttonNextEl.addEventListener("click", () => {
  swiperEl.swiper.slideNext();
  console.log("first");
});
buttonPrevEl.addEventListener("click", () => {
  swiperEl.swiper.slidePrev();
});

Object.assign(swiperEl, params);

swiperEl.initialize();
