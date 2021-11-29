const selector = document.querySelector(".select")  

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices',
     },
    
  });
  let arr = [];
  selector.addEventListener("change", function(event) {
   document.querySelectorAll(`.swiper-slide[data-tab=${event.detail.value}]`).forEach(item => {
      arr.push(item);
    });
     console.log(arr);
    document.querySelectorAll(".swiper-slide").forEach((item, index) => {
      console.log(index)
      gallerySlider.removeSlide(index)
    })
     arr.forEach((el, index) => {
      gallerySlider.addSlide(index, el)
     })
  });
  
/*});*/