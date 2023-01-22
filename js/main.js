$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".main_list a").css("color" , "#0a0aa8");
        }
   
        else{
            $(".main_list a").css("color" , "#fff");  	
        }
    })
  })


//   $('.slick').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });

  
$(document).ready(function(){
    $('.row').slick({
      setting:
      setting-value
    });
  });
      