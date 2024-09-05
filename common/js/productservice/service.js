const container = document.querySelector("#section_services");
const menus = container.querySelectorAll("li");
let index = 0;

menus.forEach((element, idx) => {
  element.addEventListener("click", () => {
    index = idx;
    hideDetail(idx);
  });
});

function hideDetail() {
  menus.forEach((element, idx) => {
    const p = element.querySelector("#detail");
    if (index === idx) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}

hideDetail(index);
