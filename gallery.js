document.addEventListener("DOMContentLoaded", function() {

  let gallerySlider = new Swiper(".swiper-right--content", {
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
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
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
        rows: 2
      },
      spaceBetween: 34,
    },

    1350: {
      slidesPerView: 3,
      grid: {
        rows: 2
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



const selector = document.querySelector(".select")  

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices',
     },
    
  });
  let arr = [];
  selector.addEventListener("change", function(event) {
    // document.querySelectorAll(`.swiper-slide[data-tab=${event.detail.value}]`).forEach(item => {
    //   arr.push(item);
    // });
    // console.log(arr);
    document.querySelectorAll(".swiper-slide").forEach((item, index) => {
      console.log(index)
      gallerySlider.removeSlide(index)
    })
    // arr.forEach((el, index) => {
    //   gallerySlider.addSlide(index, el)
    // })
  });
  
});