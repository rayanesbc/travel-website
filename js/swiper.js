const swiper = new Swiper(".swiper", {
  slidePerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },
  loop: true,
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },
  speed: 400,
  spaceBetween: 100,
});
