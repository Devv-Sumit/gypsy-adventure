
const locationSlider = new Swiper('.location-wrapper', {
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 2,
    },
  },
})
const adventureSlider = new Swiper('.adventures-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 2,
    },
  },
})


const accomodationSlider = new Swiper('.accomodation-slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 2,
    },
  },
})
const blogSlider = new Swiper('.blog-slider', {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {
    992: {
      direction: 'vertical',
      slidesPerView: 1,
    },
    680: {
      slidesPerView: 2,
    },
  },
})

const imgGallery = new Swiper('.image-gallery', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    680: {
      slidesPerView: 2,
    },
  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      992: {
        slidesPerView: 4,
      },
      680: {
        slidesPerView: 2,
      },
    }
});

var reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const stayReview = new Swiper(".stay-review-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  }
})

window.addEventListener('scroll', () => {
  if (scrollY >= 20) {
    document.querySelector('header').classList.add('bg-white','text-dark')
  }
  else {
    document.querySelector('header').classList.remove('bg-white','text-dark')
    
  }
})

