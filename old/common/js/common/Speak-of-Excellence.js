const params = {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: "auto",
      spaceBetween: "20",
    },
  },
};

const swiperEl = document.querySelector(".Speak-of-Excellence");

Object.assign(swiperEl, params);

swiperEl.initialize();
