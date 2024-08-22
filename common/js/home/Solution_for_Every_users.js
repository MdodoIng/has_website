document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const container = document.querySelector("#Solution_for_Every_users");
  const menuList = container.querySelectorAll("[data-item-id]");
  const images = container.querySelectorAll("[data-img-id]");

  gsap.registerPlugin();

  gsap.set(images, {
    zIndex: -2,
    y: (i) => i * 100 + "%",
  });
  gsap.set(images[count], {
    zIndex: -1,
  });

  let activeElement = null;
  menuList.forEach((element, idx) => {
    const id = Number(element.getAttribute("data-item-id"));
    element.addEventListener("click", () => {
      if (activeElement) {
        activeElement.classList.remove("[&_span]:bg-primary","text-primary");
        activeElement.classList.add("[&_span]:bg-black", "text-black");
      }
      if (count !== id) {
        count = id;
        element.classList.remove("[&_span]:bg-black");
        element.classList.add("[&_span]:bg-primary","text-primary");
        activeElement = element;
      } else {
        element.classList.add("[&_span]:bg-black", "text-black");
        element.classList.remove("[&_span]:bg-primary","text-primary");
        activeElement = null;
      }
      imageHide();
    });
  });

  function imageHide() {
    images.forEach((img) => {
      const id = Number(img.getAttribute("data-img-id"));

      if (count === Number(id)) {
        gsap.to(img, {
          zIndex: -1,
          y: 0 + "%",
          duration: 0.5,
        });
      } else {
        gsap.to(img, {
          zIndex: -2,
          y: 100 + "%",
        });
      }
    });
  }
});
