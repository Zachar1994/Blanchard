let btn = document.querySelector(".checkbox__h2");
let checklist = document.querySelector(".checkbox__list");
btn.addEventListener("click", function() {
  checklist.classList.toggle("checklist__active");
  document.querySelectorAll(".checkbox__label").forEach(el => {
    el.classList.toggle("active");
    let checkbox = el.querySelector(".checkbox");
 
    if (checkbox.checked) {
      el.classList.add("active");
    } 
  })
});

document.querySelectorAll(".checkbox__label").forEach(el => {
  el.addEventListener("click", function() {
    let label = this;
    if (!checklist.classList.contains("checklist__active")) {
      label.classList.remove("active");
    } 
  });
})