$(document).ready(function(){
  $(window).bind('scroll', function() {
  var asideTop = $( window ).height();
        if ($(window).scrollTop() > asideTop) {
            $('aside').addClass('fixed');
        }
        else {
            $('aside').removeClass('fixed');
        }
   });
});