document.addEventListener("DOMContentLoaded", () => {
  let count;
  const container = document.querySelector("#Solution_for_Every_users");
  const menuList = container.querySelectorAll("[data-item-id]");
  const images = container.querySelectorAll("[data-img-id]");

  const texts = Array.from(container.querySelector("#texts").children);

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
        activeElement.classList.add("[&_span]:!bg-black", "!text-black");
        activeElement.classList.remove("[&_span]:!bg-primary", "!text-primary");
      }

      if (count !== id) {
        count = id;
        element.classList.remove("[&_span]:!bg-black", "!text-black");
        element.classList.add("[&_span]:!bg-primary", "!text-primary");
        activeElement = element;
      } else {
        element.classList.remove("[&_span]:!bg-primary", "!text-primary");
        element.classList.add("[&_span]:!bg-black", "!text-black");
        activeElement = null;
      }
      hideText(count);
      imageHide();
    });
  });

  function hideText(id) {
    texts.forEach((element) => {
      if (Number(element.dataset.itemId) === id) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }

  hideText(1);

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
