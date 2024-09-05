let count = 0;

const container = document.querySelector("#leadingHeroSection");
const textTargets = container.querySelectorAll(".heading");
const headingHight = container.querySelector(".headingHight");
const images = container.querySelectorAll("[data-sliderImage]");
const sliderPagination = container.querySelector("[data-slider-pagination]");
const dummi = container.querySelector("p");

function createPagination() {
  sliderPagination.style.gridTemplateRows = `repeat(${textTargets.length},minmax(0,1fr))`;
  sliderPagination.innerHTML = Array.from({ length: textTargets.length })
    .map((_) => "<span></span>")
    .join("");

  const paginationBtns = sliderPagination.querySelectorAll("span");
  gsap.set(paginationBtns, {
    height: "0%",
  });
}

createPagination();

gsap.set(textTargets, {
  y: (i) => i * 100 + "%",
});

gsap.set(images, {
  // opacity: 0,
  zIndex: -2,
});
gsap.set(images[0], {
  // opacity: 1,
  zIndex: -1,
});

function animateBox() {
  setHightOfPagination();
  setHeight();
  changeBg();
  gsap.fromTo(
    textTargets[count],
    { y: "200%" }, // From
    {
      y: "0%", // To
      duration: 1.2,
      opacity: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(textTargets[count], {
          y: "-200%",
          duration: 1.2,
          delay: 2,
          ease: "power2.inOut",
          opacity: 0,
        }),
          (count = count < textTargets.length - 1 ? ++count : 0),
          setTimeout(() => {
            animateBox();
          }, 2600);
      },
      immediateRender: true,
    },
  );
}

function setHeight() {
  headingHight.style.height = `${textTargets[count].clientHeight}px`;
}

function setHightOfPagination() {
  const paginationBtns = sliderPagination.querySelectorAll("span");

  paginationBtns.forEach((element, idx) => {
    gsap.fromTo(
      paginationBtns[count],
      {
        height: "0%",
        duration: "0",
        ease: "leaner",
      },
      {
        height: "100%",
        duration: "2",
        ease: "leaner",
      },
    );
    if (idx < count) {
      gsap.to(element, {
        height: "100%",
        duration: "0",
        ease: "leaner",
      });
    }
    if (idx > count) {
      gsap.to(element, {
        height: "0%",
        duration: "0",
        ease: "power2.inOut",
      });
    }
  });
}

createPagination();

function changeBg() {
  images.forEach((element) => {
    const id = element.getAttribute("data-sliderImage");
    if (+id === count + 1) {
      gsap.to(element, {
        zIndex: -1,
      });
    } else {
      gsap.to(element, {
        zIndex: -2,
      });
    }
  });
}
changeBg();
setHeight();

animateBox();
