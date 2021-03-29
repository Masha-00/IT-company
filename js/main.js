$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
/*scroll color */
/*var menu = $("header");
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if ( top >= 100 ) {
    menu.css(background='green');
  } 
});*/
$(document).ready(function () {
  $(window).scroll(function(){
      $('.header').addClass('scrolled');
  });
});
