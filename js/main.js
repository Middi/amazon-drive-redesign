$(document).ready(function () {
        
  // ===========================
  // Contacts edit/delete bar reveal
  // ===========================

  $('#nav-toggle').click(function () {
    if ($('#menu').hasClass('hidden')) {
         $('#menu').slideDown( "slow", function() {
            $('#menu').removeClass('hidden');
         });
    }
    else {
        $('#menu').slideUp( "slow", function() {
            $('#menu').addClass('hidden');
        });
    }
  });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $('#menu').slideUp( "slow", function() {
                $('#menu').addClass('hidden');
                });
                return false;
            }
        }
    });      
});