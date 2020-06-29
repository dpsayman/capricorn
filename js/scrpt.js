$(window).on('load', function () { // make sURE WHOLe website is loaded//
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*-- Portfolio -- */
$(window).on('load', function () {
   
    // Initialize isotope //
    $("#isotope-container").isotope ({
    });
    
    //filter items on button click 
    $("#isotope-filters").on('click', 'button', function() {
       
        //get filter value
        var filtervalue = $(this).attr('data-filter');
       // filter porfolio
        $("#isotope-container").isotope ({
            filter: filtervalue
    });
        // active button 
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});
// Manefic Popup plugin
$(function () {

    $("#portfolio-wrapper").magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
        gallery: {
        enabled: true
    }
        
    
    });
    
    });

/* =========================================
              Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 768 up
            768: {
                items: 1
            }
        }
    });
});

