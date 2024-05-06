$(document).ready(function(){


  // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
      // cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      // mousewheel: true,
      // keyboard: true,
      loop : true,

      
    });

  var swiper = new Swiper(".secondSwiper", {
      slidesPerView: "2",
      spaceBetween: "24",
      loop: true,
      centeredSlides : false,
      breakpoints: {
        1400: {
          slidesPerView: "5",
          spaceBetween: "24",
        },
        960: {
          slidesPerView: "3",
          spaceBetween: "24",
        },

      }
        
  });
    
    // 햄버거 버튼
    $('#hamburger').click(function(){
      $('.sub-menu-box').toggleClass('show');
      $(this).toggleClass('show');
    });



    $(window).scroll(function(){
      let sct = $(window).scrollTop();

      if(sct >= 300){
          $('.header-area,.header-logo').addClass('active');
        
      }else{
          $('.header-area,.header-logo').removeClass('active');
      }
    });



});