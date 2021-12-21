document.querySelector(".header__btn-open").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
document.querySelector(".header__nav").classList.remove("active");
})


document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})



document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".list--item__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".container--dropdown");
      
      document.querySelectorAll(".list--item__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });
      
      document.querySelectorAll(".container--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".list")) {
      document.querySelectorAll(".container--dropdown").forEach(el => {
          el.classList.remove("active-list--item");
      })
       document.querySelectorAll(".list--item__btn").forEach(el => {
          el.classList.remove("active--btn");
      });
    }
  })
  })


  new SimpleBar(document.querySelector(".simplebar"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
  document.querySelectorAll(".simplebar").forEach(item => {

    new SimpleBar(item, { autoHide: false , scrollbarMaxSize: 28 });
    });