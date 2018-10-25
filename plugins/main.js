/*=========================================================================

Template Name: IMOZAR - Personal Portfolio Template
Author: PhyDev
Author Link: https://themeforest.net/user/phydev;
Version: 1.0
Design and Developed by: PhyDev

NOTE: This is the main javascript file for the template

=========================================================================*/


if (process.BROWSER_BUILD) {
   const $ = require('jquery')
   $(function() {
      console.log('document ready!');
      // do whatever you want with html and jquery


  	// Define Some Elements
  	var allWindow = $(window),
        body = $('body'),
        top = allWindow.scrollTop(),
        navBar = $(".nav-wrapper");


    /*-----------------------------------------------------
      Javascript Function For Smooth Mouse Scrolling
    -------------------------------------------------------*/

    jQuery.scrollSpeed = function(step, speed) {
        
        var $document = $(document),
            $body = $('html, body'),
            option = 'default',
            root = top,
            scroll = false,
            scrollY,
            view;
            
        if (window.navigator.msPointerEnabled) {
            return false;
        }
            
        allWindow.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > allWindow.height();
                scroll = true;
            
            // if (scrollY) {
                
            //     view = allWindow.height();
                    
            //     if (deltaY < 0 || detail > 0) {
            //         root = (root + view) >= $document.height() ? root : root += step;
            //     }
                
            //     if (deltaY > 0 || detail < 0) {
            //         root = root <= 0 ? 0 : root -= step;
            //     }
                
            //     $body.stop().animate({
            //         scrollTop: root
            //     }, speed, option, function() {
            //         scroll = false;
            //     });
            // }
            
            // return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = top;
            if (!scroll) root = allWindow.scrollTop();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = allWindow.height();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };

    // initialize Smooth Scrolling Only in Modern browsers
    if(animation) {
    	jQuery.scrollSpeed(400, 700);
    }


    /*---------------------------------------------------------------------
      Javascript Function For Sticky Navigation Bar AND SMOOTH SCROLLING
    ----------------------------------------------------------------------*/

    // Define stikyNav Function
    function stikyNav() {

      top = allWindow.scrollTop();

      if ( top >= 100 ) {
        navBar.addClass("nav-sticky");

      } else {
        navBar.removeClass("nav-sticky");
      }

      // SHow Also Scroll up Button
      if ( top >= 1000 ) {
        $('.scroll-up').addClass("show-up-btn");
      } else {
        $('.scroll-up').removeClass("show-up-btn");
      }
    }

    // Select all links with hashes
    $('a.scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, speed);
          }
        }
    });

    $(".scroll-up").on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 900);
    });
    


    /*----------------------------------------------------------------
      Javascript Function For Change active Class on navigation bar
    -----------------------------------------------------------------*/

    var sections = $('.one-page-section'),
        navList = navBar.find("ul.navbar-nav");

    // Define ChangeClass Function
    function ChangeClass() {

      top = allWindow.scrollTop();

        $.each(sections, function(i,val) {

          var section = $(this),
              section_top = section.offset().top,
              bottom = section_top + section.height();

            if (top >= section_top && top <= bottom) {

              var naItems = navList.find('li');

              $.each(naItems ,function(i,val) {
                var item = $(this);
                item.find("a").removeClass("active");
              });

              navList.find('li [href="#' + section.attr('id') + '"]').addClass('active');
            }

        });

    } // End of ChangeClass Function




    /*---------------------------------------------------
      Javascript Function FOR PARALLAX EFFECT
    ---------------------------------------------------*/

    // create variables
    var backgrounds = $('.parallax');

    function parallax() {

      // for each of background parallax element
      $.each( backgrounds, function( i, val ) {

        var backgroundObj = $(this),
          backgroundObjTop = backgroundObj.offset().top,
          backgroundHeight = backgroundObj.height();

        // update positions
        top = allWindow.scrollTop();

          var yPos = ((top - backgroundObjTop))/2;

          if ( yPos <= backgroundHeight + backgroundObjTop ) {
            backgroundObj.css({
              backgroundPosition: '50% ' + yPos + 'px'
            });
          }

      });
    };


    /*-----------------------------------------------------------------
      Javascript Function for PROGRESS BAR LINES  SCRIPT
    ------------------------------------------------------------------*/

    var linesHead = $(".skills-section"),
        line = $(".progress-bar-line");
        
    //Progress Bars function
    function progressFunction(e) {

      if ( linesHead.length ) {

        if (!linesHead.hasClass("done")) {

          var linesHeadTop = linesHead.offset().top,
              top = allWindow.scrollTop(),
              winH = allWindow.height() - 160;

          if (top >= linesHeadTop - winH) {

            linesHead.addClass("done");
            $.each( line, function( i, val ) {

            var thisLine = $(this),
              value = thisLine.data("percent"),
              progressCont = $(thisLine).closest('.progress-bar-linear').find(".progress-cont span");

              thisLine.css("width",value + "%");
              progressCont.html(value + "%")

            });
          }
        }
      }
    } //End progressFunction Fuction


    function scrollFunctions() {
      stikyNav();
      ChangeClass();
      parallax();
      progressFunction();
    }

    // add Event listener to window
    allWindow.on('scroll', function() {
      scrollFunctions();
    });


    /*------------------------------------------
      Javascript for initialize text Typer
    --------------------------------------------*/

    // initialize text Typer Only in Modern browsers
    if (animation) {

      var text = $('#home .typer-title'),
          textOne = "Product Designer and Developer",
          textTwo = "UX/UI Designer",
          textThree = "Front-End Developer";

          if (!!$.prototype.typer) {
            text.typer([textOne,textTwo,textThree]);
          }
    }




    /*------------------------------------------------------
      Javascript Function for filtering portfolio items
    --------------------------------------------------------*/

  var FilterContainer = $('#work .filtr-container');

  if ( FilterContainer.length > 0 && !!$.prototype.isotope ) {
  
    var filterizd;
    FilterContainer.imagesLoaded( function() {
      filterizd = FilterContainer.isotope({
        itemSelector: '.filtr-item',
      });
    });
    
    $('#work-list li a.filter').on( 'click', function(e) {

        // Prevent the default link behavior 
        e.preventDefault();
        
        var target = $(this),
            filterValue = target.data('filter');

        filterizd.isotope({ filter: filterValue });

        // return if already current
        if (!target.hasClass("filter-active")) {
          // remove current
          $('#work-list').find('.filter-active').removeClass('filter-active');
          // set current
          target.addClass('filter-active');
        }

    });

  }


    /*-------------------------------------------
     Magnific Popup Portfolio Initializing
    -------------------------------------------*/

    $(".popup-youtube").magnificPopup({
        type: 'iframe'
    });

    $('.popup-link').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery:{
          enabled:true
      },
      zoom: {
        enabled: true,
        duration: 260,
        easing: 'ease-in',
      }
    });


   })
}


