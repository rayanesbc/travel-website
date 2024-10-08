// SWIPER 1 - SHOWCASE START
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

// SWIPER 2 - TOP DESTINATION
const swiper2 = new Swiper(".swiper2", {
  slidePerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    depth: 0,
    modifier: 1,
    rotate: 0,
    scale: 0.8,
    slideShadows: false,
    stretch: 0,
  },

  breakpoints: {
    //when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    //when window width is >= 700px
    700: {
      slidesPerView: 2,
    },
    //when window width is >= 900px
    900: {
      slidesPerView: 3,
    },
  },
});

// SWIPER 3 - TRAVEL COUNTRIES
const swiper3 = new Swiper(".swiper3", {
  slidePerView: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,

  breakpoints: {
    //when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    //when window width is >= 700px
    700: {
      slidesPerView: 2,
    },
    //when window width is >= 900px
    900: {
      slidesPerView: 2,
    },
  },
});

// SWIPER 4 - TRAVEL BLOG
const swiper4 = new Swiper(".swiper4", {
  slidePerView: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,

  breakpoints: {
    //when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    //when window width is >= 700px
    700: {
      slidesPerView: 2,
    },
    //when window width is >= 900px
    900: {
      slidesPerView: 3,
    },
  },
});

// SWIPER 5 - TESTIMONIALS
const swiper5 = new Swiper(".swiper5", {
  slidePerView: 1,
  spaceBetween: 95,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,

  breakpoints: {
    //when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    //when window width is >= 700px
    700: {
      slidesPerView: 1,
    },
    //when window width is >= 900px
    900: {
      slidesPerView: 1,
    },
  },
});
