
var selector = document.querySelector ("input[type='tel']")
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


new JustValidate ('.contacts__form', {
    rules: {
       name: {
           required: true,
           minLength: 4,
           maxLength: 10,
       },
       phone: {
           required: true ,
           function: (name,value) => {
            const phone = selector.inputmask.unmaskevalue 
            return Number(phone) && phone.length === 10
        }
           
       },
 },
       messages: {
                name: {
                    required: 'Обязательно для заполнения.',
                    errorMessage: 'Неверный формат',
                },
                phone: {
                    required: 'Обязательно для заполнения',
                    function: 'Введите номер из 10 символов, без +7'
                },
              }
           
          });