const swiperEl = document.querySelector(".products-slider");
const buttonNextEl = document.querySelector(".swiper_next_btn");
const buttonPrevEl = document.querySelector(".swiper_prev_btn");
const glassBtn = document.getElementById("glass_product_btn");
const aluminiumBtn = document.getElementById("aluminium_product_btn");
const products = Array.from(swiperEl.children);
const buttons = [glassBtn, aluminiumBtn];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach(
      (b) => (
        b.classList.remove(
          "product_filterBtn_active",
          "product_filterBtn_deActive",
        ),
        b.classList.add("product_filterBtn_deActive")
      ),
    );

    btn.classList.toggle("product_filterBtn_active");
    btn.classList.toggle("product_filterBtn_deActive");

    if (btn === glassBtn) {
      filterProduct("glass");
    } else if (btn === aluminiumBtn) {
      filterProduct("aluminium");
    }
  });
});

function filterProduct(dataset) {
  products.forEach((element) => {
    if (element.dataset.product === dataset) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
}

filterProduct("glass");

const params = {
  autoplay: {
    delay: 5000,
  },
};

buttonNextEl.addEventListener("click", () => {
  swiperEl.swiper.slideNext();
  console.log("first");
});
buttonPrevEl.addEventListener("click", () => {
  swiperEl.swiper.slidePrev();
});

Object.assign(swiperEl, params);

swiperEl.initialize();
