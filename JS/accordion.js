(function($) {
    // run the accordion
  var allPanels = $('.content').hide();
  var heads = $('.accordion header');
  $('header').on('click', function() {

      $this = $(this);
      $target =  $this.parent().find('div.content');
      if(!$target.hasClass('active')){
      heads.removeClass('selected');
      $(this).addClass('selected');
      allPanels.removeClass('active').slideUp();
      $target.addClass('active').slideDown();
      $('html, body').animate({scrollTop: $($target).offset().bottom}, 5000);
      }
   fitmenow(); // trigger fitText
    runslides();
    msn();
  });
  

  
  // ticker
  
  var current = 1;
    var height = jQuery('.ticker').height();
    var numberDivs = jQuery('.ticker').children().length;
    var first = jQuery('.ticker h1:nth-child(1)');
    setInterval(function() {
        var number = current*-height;
        first.css('margin-top', number + 'px');
        if (current === numberDivs) {
            first.css('margin-top', '0px');
            current = 1;
        } else 
            current++;
    }, 2500);
    

// box 
  
    
 jQuery(window).on("resize", runslides);
 jQuery(document).on("ready", fitmenow);

firstInit();
})(jQuery); // END

