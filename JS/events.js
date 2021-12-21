let gallerySlider = new Swiper(".events__content", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination--right",
      type: "fraction"
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".events__btn-next",
      prevEl: ".events__btn-prev"
    },
  

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 0
      },
      630: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 27
      },
  
      1023: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50
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
  