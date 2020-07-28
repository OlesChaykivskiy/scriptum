$(document).ready(function(){

   $('.header__btn-nav').on('click',function(){
      $('.header__burger').toggleClass('header__burger-active'),
      $('.header__nav').toggleClass('header__nav-active'),
      $('.header__body').toggleClass('header__body-active')
   });
   
  let button = $('#up');
    //  $(window).on('scroll', => {
    //    if($(this).scrollTop() >= 50) {
    //      button.fadeIn();
    //    } ealse {
    //    button.fadeOut();
    //    }
    //  });
    button.on('click', (e) => {
      $('html').animate({scrollTop: 0}, 1000);
    });


   $('.scrollTo').on('click',function(){
    var getElement = $(this).attr('href');
    if ($(getElement).length){
      var getOffset = $(getElement).offset().top;
      $('html').animate({
        scrollTop: getOffset}, 1000);
    }
    return false;
   });

   // SWIPER_____________________________________
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         1: {
           slidesPerView: 1,
           spaceBetween: 23,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 23,
         },
         1024: {
           slidesPerView: 3,
           spaceBetween: 23,
         },
       }
     });
   
});