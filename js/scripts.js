$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
            delay: 3000,
            disableOnInteraction: false
  },
 });

 var mySwiper = new Swiper('.rewiew', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-text',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    })
});