// script.js

$(document).ready(function(){
  $('.format').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots:true,
    arrows:false,
  });


  $(".regular").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    arrows: true,
    dots:true,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow:1,
            slidesToScroll:1,
            arrows:false,
            
        }
        }
    ]
});

});

