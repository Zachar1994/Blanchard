document.addEventListener("DOMContentLoaded", function() {

    let gallerySlider = new Swiper(".gallery__right-content", {
    slidesPerView: 3,
    slidesPerGroup: 2,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
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
        spaceBetween: 34
      },
  
      1200: {
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


  let swiperSlides = document.querySelector(".swiper-section").querySelectorAll(".swiper-slide");
let modal = document.querySelector(".swiper-section-modal");
let modalBtn = modal.querySelector(".close");
swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    console.log(modal.querySelector("img"));
    modal.classList.add("modal-active");
    modal.querySelector("img").setAttribute("src", link);
  })
})
modalBtn.addEventListener("click", function() {
  modal.classList.remove("modal-active");
});