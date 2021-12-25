 // With the above scripts loaded, you can call `tippy()` with a CSS
          // selector and a `content` prop:
          tippy('#tooltip1', {
            content: 'Пример современных тенденций - современная методология разработки',
            trigger: 'click',
            duration: 600,
             });
 
             tippy('#tooltip2', {
            content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
            trigger: 'click',
            duration: 600,
             });
 
             tippy('#tooltip3', {
            content: 'В стремлении повысить качество ',
            trigger: 'click',
            duration: 600,
             });


             document.querySelector(".tooltip").addEventListener("click", function() {
              document.querySelector("#tooltip1,#tooltip2,#tooltip3").classList.add("active");
          })
          
         