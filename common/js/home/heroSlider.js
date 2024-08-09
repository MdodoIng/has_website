let count = 0;

const textTargets = document.querySelectorAll(".heading");

gsap.set(textTargets, {
  y: (i) => i * 100 + "%",
});

function animateBox() {
  gsap.fromTo(
    textTargets[count],
    { y: "100%" }, // From
    {
      y: "0%", // To
      duration: 1.2,
      opacity: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(textTargets[count], {
          y: "-100%",
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
    }
  );
}

animateBox();

