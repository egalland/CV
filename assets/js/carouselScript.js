$(function(){
  $('#startPageCarousel').carousel({
    interval : false
  });
    var progressPercent = 0;
    var progressPercentIncrementation = 0.1;
      setInterval(function(){
        if(progressPercent > (100 - progressPercentIncrementation)){
          progressPercent = 0;
          $('#startPageCarousel').carousel('next');
        }else if(($('#startPageCarousel')).is(':hover')){
          progressPercent = progressPercent;
        }else{
        progressPercent += progressPercentIncrementation;
        $('.progressBar').width(progressPercent + '%');
      }
    }, 10);

  $('.carousel-indicators li').click(function(){
    var indicator = $(this).attr('class');
    if(indicator.length <= 5){
      $('#startPageCarousel').carousel(indicator[4]-1);
      $('.progressBar').width(0);
    }
  });

  $('.carousel-control-prev').click(function(){
    $('#startPageCarousel').carousel('prev');
    progressPercent = 0;
    $('.progressBar').width(0);
  });
  $('.carousel-control-next').click(function(){
    $('#startPageCarousel').carousel('next');
    progressPercent = 0;
    $('.progressBar').width(0);
  });
})
