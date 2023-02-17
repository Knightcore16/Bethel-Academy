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


  