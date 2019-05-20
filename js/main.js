AOS.init();
const profesion = baffle(".profesion");

profesion.set({
    characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
    speed: 75
});

profesion.start();


var interval=setInterval(function(){
  clearInterval(interval);
  profesion.reveal(1000);
},1000);

// Add smooth scrolling to all links
$("a").on('click', function(event) {
	
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $('#tagline').t({
    beep: false,
    caret:'<span style="color:red;">|</span>',
    typing:function(elm,chr){
    if(chr.match(/\-trigger/))
        $('#pow-txt').show().delay(100).fadeOut(0);
    }
});
setTimeout(function(){
    $('.loader').hide();

}, 1800);
$(document).ready(function () {
  //  isotope
  $('#projects').waitForImages(function () {
      var $container = $('.portfolio-container');
      $container.isotope({
          filter: '*',
      });

      $('.portfolio-filter a').click(function () {
          $('.portfolio-filter .active').removeClass('active');
          $(this).addClass('active');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 500,
                  animationEngine: "jquery"
              }
          });
          return false;
      });

  });

  //animatedModal
  $("#demo01").animatedModal();
  $("#demo02").animatedModal2();
  $("#demo03").animatedModal3();
});