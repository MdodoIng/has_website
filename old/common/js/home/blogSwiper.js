const params = {
  autoplay: {
    delay: 5000,
  },
};

const swiperEl = document.querySelector(".blogSwiperLeftContainer");

Object.assign(swiperEl, params);

swiperEl.initialize();
