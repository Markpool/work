import "./scss/main.scss";

//точка входа

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active-1');
    $('body').toggleClass('lock');
  });


 //open moadal window   
 let input = document.querySelector('.form__input-file');
 let placeHolder = document.querySelector('.form__input-file-placeholder');
 input.addEventListener('change', function () {
   placeHolder.innerHTML = 'File upload';
   placeHolder.style.color = '#7e7e7e';
 })
 
 /*========================*/
 /*          form          */
 /*========================*/
 
 const form = document.querySelector('.modal-overlay'),
  addBtn = document.querySelector('.add__btn'),
  check = document.querySelector('.checkbox'),
  formBtn = document.querySelector('.form_btn_unactive'),
  sendBtn = document.querySelector('#send__form'),
  closeBtn = document.querySelector('#close__form');
 
  
 
 
 
 
 
 addBtn.addEventListener('click', function () {
 form.classList.add('form--open')
 document.body.style.overflow = "hidden";
 });
 
 function closeForm () {
   form.classList.remove('form--open');
   document.body.style.overflow = "";
 };
 
 closeBtn.addEventListener('click', closeForm);
 
 
 check.addEventListener('change', function () {
   if (check.checked) {
     formBtn.classList.add('form_btn_active');
   } else {
     formBtn.classList.remove('form_btn_active');
   };
  });
});

