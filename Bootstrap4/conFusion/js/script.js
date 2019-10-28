$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    //Activate  buttons
    $('#mycarousel').carousel({interval:2000});
    $("#carouselBtn").click(function(){
        if($('#carouselBtn').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselBtn').children('span').removeClass('fa-pause');
            $('#carouselBtn').children('span').addClass('fa-play');

        }
        else if($('#carouselBtn').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselBtn').children('span').removeClass('fa-play');
            $('#carouselBtn').children('span').addClass('fa-pause');
        }
        
    });
   /* $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });*/
});
//login modal
$(document).ready(function(){
    $("#loginBtn").click(function(){
      $("#loginModal").modal();
    });
  });

  //reserve modal
  $(document).ready(function(){
    $("#reserveBtnM").click(function(){
      $("#reservationModal").modal();
    });
  });