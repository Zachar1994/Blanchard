let projectSlider = new Swiper(".projects__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 40
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

