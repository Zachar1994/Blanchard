let gallerySlider = new Swiper(".projects__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
      }
  
    },
  
    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  
  });
  