"use strict";
(function($) {
    /*==============================
        Is mobile
    ==============================*/
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    /*==============================
        Main function
    ==============================*/

    /* MOBILE MENU
    *********************/
    function fnHeader(){
        //Append, display navigation fixed for mobile
        var $nav = $('.navigation'),
            flagResize = 0,
            mediascreen = $nav.data('menu-type'),
            windowWidth = window.innerWidth,
            $book = $('.book-now-wrap');
        if(windowWidth <= mediascreen){
            flagResize = 1;
            $('body').prepend('<div class="menu-mobile"></div>');
            $nav.appendTo('.menu-mobile');
            $book.appendTo('.main-header .container');
        }

        $(window).resize(function(){
            var $nav = $('.navigation'),
            mediascreen = $nav.data('menu-type'),
            windowWidth = window.innerWidth;
            if(windowWidth <= mediascreen && !flagResize){
                flagResize = 1;
                $('body').prepend('<div class="menu-mobile"></div>');
                $nav.appendTo('.menu-mobile');
                $book.appendTo('.main-header .container');
            }
            if(windowWidth > mediascreen && flagResize){
                flagResize = 0;
                $nav.appendTo('.main-header .container');
                $('.menu-mobile').remove();
                $book.prependTo($nav);
            }
        });

        /* Submenu click navigation fixed for mobile
        *************/
        var $haschild = $('.nav .menu-item-has-children > a');

        // toggle when click mobile-nav-menu
        $('.mobile-nav-menu').on('click', function(){
            $('#page-wrap').toggleClass('active');
            $(this).toggleClass('mobile-active');
            $('.menu-mobile').toggleClass('fixSfr');
            $('header.header').toggleClass('header-active');
            setTimeout(function(){
                $('html, body').toggleClass('overflow-hidden');
                $('.menu-mobile').toggleClass('overflow-auto');
            }, 290);
        });

        // Click page-wrap to remove menu-mobile
        // $('#page-wrap').on('click', function(){
        //     $(this).removeClass('toggle-translate active');
        //     $('.menu-mobile').removeClass('fixSfr');
        //     $('.mobile-nav-menu').removeClass('mobile-active');
        //     $('html, body').removeClass('overflow-hidden');
        //     $('.menu-mobile').removeClass('overflow-auto');
        // });

        $('.navigation, .mobile-nav-menu').on('click', function(evt) {
            evt.stopPropagation();
        });

        // toggle for nav menu-item-has-children
        // if($('.menu-mobile').children($nav).length != 0){
            $haschild.on('click', function(){
                $(this).parent('.menu-item-has-children').toggleClass('active');
                //return false;
            });
        // }

        // $(window).resize(function(){
        //     if($('.menu-mobile').children($nav).length != 0){
        //         $haschild.on('click', function(){
        //             $(this).toggleClass('active');
        //             //return false;
        //         });
        //     }
        // });
    }

    function homeSlider() {
        // Demo REVOLUTION SLIDER

        if($('.tp-banner').length){
          jQuery('.tp-banner').show().revolution(
          {
            dottedOverlay:"none",
            delay:16000,
            startwidth: 1170, //1170,
            startheight:700,
            hideThumbs:200,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            hideTimerBar:"on",

            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"preview4",

            touchenabled:"on",
            onHoverStop:"on",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

            keyboardNavigation:"on",

            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:320,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,

            shadow:0,
            fullWidth:"on",
            fullScreen:"off",

            spinner:"spinner4",

            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,

            shuffle:"off",

            autoHeight:"off",
            forceFullWidth:"off",

            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,

            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            videoJsPath:"rs-plugin/videojs/",
            fullScreenOffsetContainer: ""
          });
        } //if
    }

    function owlCarouselSlider(){
        var navslider = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            navslider2 = ['<i class="prev-arrow"></i>', '<i class="next-arrow"></i>'],
            navslider3 = ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'];

        if ($('.flipbook-slider').length > 0){
            $('.flipbook-slider').owlCarousel({
                items : 1,
                itemsDesktop : [1199,1], //1 items between 1199px and 992px
                itemsDesktopSmall : [991,1], // 1 items betweem 991x and 768px
                itemsTablet: [767,1], //1 items between 767 and 0;
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                navigation: true,
                navigationText: navslider,
                transitionStyle: 'fade',
            });
        }

        if ($('.roomrate-slider').length > 0){
            $('.roomrate-slider').owlCarousel({
                items : 3,
                itemsDesktop : [1199,3], //3 items between 1199px and 992px
                itemsDesktopSmall : [991,2], // 2 items betweem 991x and 768px
                itemsTablet: [767,1], //1 items between 767 and 0;
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                navigation: true,
                navigationText: navslider,
            });
        }

        if ($('.guestbook-slider').length > 0){
            $('.guestbook-slider').owlCarousel({
                items : 1, //1 items above 1200px browser width
                itemsDesktop : [1199,1], //1 items between 1199px and 992px
                itemsDesktopSmall : [991,1], // 1 items betweem 991px and 768px
                itemsTablet: [767,1], //1 items between 767 and 0;
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                slideSpeed : 1000,
                pagination: false,
                navigation: true,
                navigationText: navslider3,
                });
        }

        if ($('.category-slider').length > 0){
            $('.category-slider').owlCarousel({
                items : 3, //1 items above 1200px browser width
                itemsDesktop : [1199,3], //1 items between 1199px and 992px
                itemsDesktopSmall : [991,2], // 1 items betweem 991px and 768px
                itemsTablet: [767,2], //1 items between 767 and 551;
                itemsMobile : [550,1], // itemsMobile disabled - inherit from itemsTablet option
                autoPlay: 5000,
                stopOnHover : true,
                loop: true,
                pagination: false,
                navigation: false,
                navigationText: navslider3,
                });
        }

        if ($('.news-slider, .event-slider').length > 0){
            $('.news-slider, .event-slider').owlCarousel({
                items : 2, //2 items above 1200px browser width
                itemsDesktop : [1199,2], //2 items between 1199px and 992px
                itemsDesktopSmall : [991,1], // 1 items betweem 991px and 768px
                itemsTablet: [767,1], //1 items between 767 and 0;
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
            })
        }

        if ($('.news-slider-2, .event-slider-2, .accommodation-slider').length > 0){
            $('.news-slider-2, .event-slider-2, .accommodation-slider').owlCarousel({
                items : 3, //2 items above 1200px browser width
                itemsDesktop : [1199,3], //3 items between 1199px and 992px
                itemsDesktopSmall : [991,2], // 1 items betweem 991px and 768px
                itemsTablet: [767,1], //1 items between 767 and 0;
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                navigation: true,
                navigationText: navslider3,
            })

            if($('.news-slider-2, .event-slider-2, .accommodation-slider').find('.owl-buttons').length != 0 && $('.news-slider-2, .event-slider-2, .accommodation-slider').find('.owl-pagination').length != 0 ){
                $('.news-slider-2, .event-slider-2, .accommodation-slider').find('.owl-pagination').css('right', '60px');
            }
        }

        if ($('.post-slider').length > 0){
            $('.post-slider').owlCarousel({
                items : 1,
                itemsDesktop : [1199,1], //1 items between 1199px and 992px
                itemsDesktopSmall : [991,1], // 1 items betweem 991x and 768px
                itemsTablet: [767,1], //1 items between 767 and 0;
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                navigation: true,
                navigationText: navslider,
            });
        }

        if ($('.big-slider').length > 0){
            $('.big-slider').owlCarousel({
                singleItem : true,
                slideSpeed : 1000,
                navigation: true,
                navigationText: navslider2,
                pagination:false,
                afterAction : syncPosition,
                //responsiveRefreshRate : 200,
            });
        }

        if ($('.small-slider').length > 0){
            $('.small-slider').owlCarousel({
                items : 7,
                itemsDesktop : [1199,7], //5 items between 1199px and 992px
                itemsDesktopSmall : [991,5], // 5 items betweem 991x and 768px
                itemsTablet: [767,5], //5 items between 767 and 480;
                itemsMobile : [480,3], // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                navigation: true,
                navigationText: navslider,
                //responsiveRefreshRate : 100,
                afterInit : function(el){
                  el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        }

        function syncPosition(el){
            var current = this.currentItem;
            $(".small-slider")
              .find(".owl-item")
              .removeClass("synced")
              .eq(current)
              .addClass("synced");
        }

        $(".small-slider").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            $('.big-slider').trigger("owl.goTo",number);
        });
    }

    /* CHANGE BOOK NOW BUTTON FOR MOBILE
    **********************/
    function changeBook(){
        // BOOK TOGGLE
        $("#toggle-book").on('click', function(){
            $(".book-check-form").toggleClass('book-toggle');
        });

        $('html').on('click', function() {
        //Hide the menus if visible
            $(".book-check-form").removeClass('book-toggle');
        });

        $('#toggle-book, .book-check-form').on('click', function(e){
            e.stopPropagation();
        });
    }

    /* DATE PICKER
    **********************/

    function datepicker(){
        var datepicker = $.fn.datepicker.noConflict();
        $.fn.bootstrapDP = datepicker;
        var $date = $('.input-group.custom .datepicker:not(#date-1,#date-2)');
        var date = new Date(),today = date.getDate(),month = date.getMonth()+1, year = date.getFullYear();
        var diableDate = [];
        if(today>0){
            month = (month<10)?('0'+month):month;
            for(var i=1;i<=today-1;i++){
                var j = (i<10)?('0'+i):i;
                diableDate.push(month+'/'+j+'/'+year);
            }
        }

        $date.bootstrapDP({
            orientation: "top auto",
            autoclose: "true",
            todayHighlight: "true",
            format: "mm/dd/yyyy",
            datesDisabled:diableDate
        });
    }

    /* TimeBox */
    function datepicker_form_search(from_select, to_select){
        if(jQuery(from_select).length){
            var nowTemp = new Date();
            var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
            
            var checkin = $(from_select).datepicker({
                todayHighlight:true,
                beforeShowDay: function(date) {
                    return date.valueOf() < now.valueOf() ? 'disabled' : '';
                }
            }).on('changeDate', function(ev) {
              if ((checkout.dates.length && ev.date.valueOf() > checkout.dates[0].valueOf()) || !checkout.dates.length) {
                var newDate = new Date(ev.date)
                newDate.setDate(newDate.getDate() + 1);
                checkout.setDate(newDate);
              }
              checkin.hide();
              $(to_select)[0].focus();
            }).data('datepicker');

            var checkout = $(to_select).datepicker({
              todayHighlight:true,
              beforeShowDay: function(date) {
                  var checkin_date;
                  if(checkin.dates.length)
                     checkin_date = checkin.dates[0];
                  else
                    checkin_date = now;
                  return date.valueOf() < checkin_date.valueOf() ? 'disabled' : '';
              }
            }).on('changeDate', function(ev) {
              checkout.hide();
            }).data('datepicker');
        }
    }

    function fixedTop(){
        $(window).scroll(function() {
          var windowScrollTop = $(window).scrollTop();
          if (windowScrollTop > 300) {
            $('#fixedTop').fadeIn(400);
          } else {
            $('#fixedTop').fadeOut(400);
          }
        });
        $('#fixedTop').on('click',function(){
            $('html, body').animate({scrollTop: '0px'}, 800);
        })
    }

    function changeColorfixedTop(){
        $(window).scroll(function() {
            var windownScrolltop = $(window).scrollTop(),
                windowHeight = $(window).height(),
                cal = windownScrolltop + windowHeight - 130,
                arr_offset1 = new Array(),
                arr_offset2 = new Array();
            $.each($('.bg-dark, .bg-darker, .bg-parallax'), function(i, el) {
                    arr_offset1[i] = $(this).offset().top;
                    if ($(this).next().length > 0) {
                        arr_offset2[i] = $(this).next().offset().top;
                    } else {
                        arr_offset2[i] = windownScrolltop + windowHeight;
                    }
            });
            $('#fixedTop').removeClass('fixedTop-light');
            $.each(arr_offset1, function(i, value) {
                if (cal > arr_offset1[i] && cal < arr_offset2[i]) {
                    if (!$('#fixedTop').hasClass('fixedTop-light'))
                        $('#fixedTop').addClass('fixedTop-light');
                }
            });
        });
    }

    function galleryThumbBox(){
        $('.gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                gallery: {
                  enabled:true
                },
                delegate: 'a',
                type: 'image',
                removalDelay: 500, //delay removal by X to allow out-animation
                callbacks: {
                    beforeOpen: function() {
                      // just a hack that adds mfp-anim class to markup
                       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                       this.st.mainClass = this.st.el.attr('data-effect');
                    },
                    buildControls: function() {
                        // re-appends controls inside the main container
                        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                    }
                },
                closeOnContentClick: false,
                midClick: false, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });
        });

        $('.mfp-iframe').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                },
                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        });
    }

    function portfolioIsotope() {
        $('.isotope-grid-wrapper').each(function() {
            var el = $(this),
                workItem = el.find('.grid-item, .grid-sizer'),
                columnGap = el.data('column-gap'),
                columnGapHorizotal = el.data('column-gap-horizotal'),
                columnGapVertical = el.data('column-gap-vertical'),
                isotopeColumn = el.data('isotope-column'),
                responsiveMd = el.data('column-md'),
                responsiveSm = el.data('column-sm'),
                responsiveXs = el.data('column-xs'),
                responsiveTn = el.data('column-tn');
            if (el.attr('data-column-gap-horizotal') !== 'undefined') {
                el.find('.isotope-grid-row').css({
                    'margin-left': -columnGapHorizotal/2,
                    'margin-right': -columnGapHorizotal/2
                });
                el.find('.grid-item').css({
                    'padding-left': columnGapHorizotal/2,
                    'padding-right': columnGapHorizotal/2
                });
            }
            if (el.attr('data-column-gap-vertical') !== 'undefined') {
                el.find('.isotope-grid-row').css({
                    'margin-top': -columnGapVertical/2,
                    'margin-bottom': -columnGapVertical/2
                });
                el.find('.grid-item').css({
                    'padding-left': columnGapVertical/2,
                    'padding-right': columnGapVertical/2
                });
            }
            if (el.attr('data-column-gap') !== 'undefined') {
                el.find('.isotope-grid-row').css({
                    'margin': -columnGap/2
                });
                el.find('.grid-item').css({
                    'padding': columnGap/2
                });
            }
            $(window).on('resize', function() {
                if (el.hasClass('gallery-grid-item-style-2') == false) {
                    var windowWidth = window.innerWidth,
                        mediumDevices = 1200,
                        smallDevices = 992,
                        extrasmallDevices = 768,
                        tinyDevices = 480;
                    if (windowWidth < tinyDevices) {
                        workItem.css('width', 100/responsiveTn + '%');
                    } else if (windowWidth < extrasmallDevices) {
                        workItem.css('width', 100/responsiveXs + '%');
                    } else if(windowWidth < smallDevices) {
                        workItem.css('width', 100/responsiveSm + '%');
                    } else if(windowWidth < mediumDevices) {
                        workItem.css('width', 100/responsiveMd + '%');
                    } else {
                        workItem.css('width', 100/isotopeColumn + '%');
                    }
                }
            }).trigger('resize');

            var portfolioContainer = el.find('.isotope-grid'),
                filters = el.find('.filters');
            filters.on('click', 'a', function() {
                var selector = $(this).attr('data-filter');
                $('.current', filters).removeClass('current');
                $(this).addClass('current');
                portfolioContainer.isotope({
                    filter: selector
                });

                return false;
            });

            $(window).on('resize', function() {
                if (el.hasClass('gallery-grid-item-style-1')) {
                    var ratio = 0.725;
                } else {
                    var ratio = 1;
                }
                var windowWidth    = Math.max($(window).width(), window.innerWidth),
                    itemWidth      = el.find('.grid-sizer').width(),
                    itemHeight     = Math.floor(itemWidth * ratio),
                    itemTallHeight = itemHeight * 2;

                    // console.log(itemHeight);
                    // console.log(itemTallHeight);

                $('.grid-item', portfolioContainer).each(function() {
                    var el = $(this);
                    if (windowWidth > 500) {
                        if (el.closest('.isotope-grid-wrapper').hasClass('gallery-grid-item-style-3') == false) {
                            if (el.hasClass('high')) {
                                el.css({
                                    'height' : itemTallHeight
                                });
                            } else if ($(this).hasClass('wide')) {
                                el.css({
                                    'height' : itemHeight
                                });
                            } else if (el.hasClass('large')) {
                                el.css({
                                    'height' : itemTallHeight
                                });
                            } else {
                                el.css({
                                    'height' : itemHeight
                                });
                            }
                        }
                    } else {
                        if (el.closest('.isotope-grid-wrapper').hasClass('gallery-grid-item-style-3') == false) {
                            if (el.hasClass('high')) {
                                $(this).css({
                                    'height' : itemTallHeight
                                });
                            } else if (el.hasClass('wide')) {
                                el.css({
                                    'height' : itemHeight / 2
                                });
                            } else if (el.hasClass('large')) {
                                el.css({
                                    'height' : itemHeight
                                });
                            } else {
                                el.css({
                                    'height' : itemHeight
                                });
                            }
                        }
                    }
                });

                portfolioContainer.imagesLoaded(function() {
                    // console.log('all images are loaded');
                    portfolioContainer.isotope({
                        layoutMode: 'masonry',
                        itemSelector: '.grid-item',
                        transitionDuration: '0.5s',
                    });
                });

            }).resize();

            filters.find('[data-filter="*"]').trigger('click');
        });
    }

    function multipleColumn() {
        $('[data-multiple-column]').each(function() {
            var el = $(this),
                columnCount = el.data('multiple-column'),
                responsiveMd = el.data('column-md'),
                responsiveSm = el.data('column-sm'),
                responsiveXs = el.data('column-xs'),
                responsiveTn = el.data('column-tn'),
                columnChildrenClass = el.data('column-children'),
                columnGap = el.data('column-gap'),
                columnGapHorizotal = el.data('column-gap-horizotal'),
                columnGapVertical = el.data('column-gap-vertical'),
                elItem = el.find('.' + columnChildrenClass);

            elItem.wrap('<div class="multiple-item"></div>');
            var elMultipleItem = elItem.parent('.multiple-item'),
                elMultipleItemClear;
            //Wrapper row
            elMultipleItem.parent()
                .wrap('<div class="multiple-row"></div>')
                .css({
                    'overflow': 'hidden',
                    'width': '100%'
                });


            if (el.attr('data-column-gap-horizotal') !== 'undefined') {
                elMultipleItem.closest('.multiple-row').css({
                    'margin-left': -columnGapHorizotal/2,
                    'margin-right': -columnGapHorizotal/2
                });
                elMultipleItem.css({
                    'padding-left': columnGapHorizotal/2,
                    'padding-right': columnGapHorizotal/2
                });
            }
            if (el.attr('data-column-gap-vertical') !== 'undefined') {
                elMultipleItem.closest('.multiple-row').css({
                    'margin-top': -columnGapVertical/2,
                    'margin-bottom': -columnGapVertical/2
                });
                elMultipleItem.css({
                    'padding-top': columnGapVertical/2,
                    'padding-bottom': columnGapVertical/2
                });
            }
            if (el.attr('data-column-gap') !== 'undefined') {
                elMultipleItem.closest('.multiple-row').css({
                    'margin': -columnGap/2
                });
                elMultipleItem.css({
                    'padding': columnGap/2
                });
            }

            // Set Column
            elMultipleItem.css({
                'width': 100/columnCount + '%',
                'float': 'left'
            });

            //Responsive
            $(window).on('resize', function() {
                var windowWidth = window.innerWidth,
                    mediumDevices = 1200,
                    smallDevices = 992,
                    extrasmallDevices = 768,
                    tinyDevices = 480;


                if (windowWidth < tinyDevices) {
                    elMultipleItem.css('width', 100/responsiveTn + '%');
                    elMultipleItemClear = elItem.parent('.multiple-item:nth-child(' + responsiveTn + 'n+1)');
                    elMultipleItem.removeClass('clear-both');
                    elMultipleItemClear.addClass('clear-both');
                } else if (windowWidth < extrasmallDevices) {
                    elMultipleItem.css('width', 100/responsiveXs + '%');
                    elMultipleItemClear = elItem.parent('.multiple-item:nth-child(' + responsiveXs + 'n+1)');
                    elMultipleItem.removeClass('clear-both');
                    elMultipleItemClear.addClass('clear-both');
                } else if(windowWidth < smallDevices) {
                    elMultipleItem.css('width', 100/responsiveSm + '%');
                    elMultipleItemClear = elItem.parent('.multiple-item:nth-child(' + responsiveSm + 'n+1)');
                    elMultipleItem.removeClass('clear-both');
                    elMultipleItemClear.addClass('clear-both');
                } else if(windowWidth < mediumDevices) {
                    elMultipleItem.css('width', 100/responsiveMd + '%');
                    elMultipleItemClear = elItem.parent('.multiple-item:nth-child(' + responsiveMd + 'n+1)');
                    elMultipleItem.removeClass('clear-both');
                    elMultipleItemClear.addClass('clear-both');
                } else {
                    elMultipleItem.css('width', 100/columnCount + '%');
                    elMultipleItemClear = elItem.parent('.multiple-item:nth-child(' + columnCount + 'n+1)');
                    elMultipleItem.removeClass('clear-both');
                    elMultipleItemClear.addClass('clear-both');
                }
            }).trigger('resize');

        });
    }

    function removeMenuType(){
        // Clear Border page-blog
        var $page_blog = $('.page-blog'),
            tabletscreen = $page_blog.data('menu-type'),
            windowWidth = window.innerWidth;
        if(windowWidth <= tabletscreen){
            $page_blog.find('.bd-l').removeClass('bd-l');
        }
        $(window).resize(function(){
            var $page_blog = $('.page-blog'),
                tabletscreen = $page_blog.data('menu-type'),
                windowWidth = window.innerWidth;
            if(windowWidth <= tabletscreen){
                $page_blog.find('.bd-l').removeClass('bd-l');
            } else {
                $page_blog.find('.wrapper').addClass('bd-l');
            }
        });

        // Remove Reservation Checkout field first-last
        var $checkout = $('.checkout'),
            mobile = $checkout.data('menu-type');
        if(windowWidth <= mobile){
            $checkout.find('.form-row-first').removeClass('form-row-first');
            $checkout.find('.form-row-last').removeClass('form-row-last');
        }
    }

    function easingClick(){
        $('.attraction-page a').on('click',function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });
    }

    function switchSchedule(){
        $('.schedule-inner:not(:first)').hide();
        $('.schedule .sch-header ul.list li a').on('click',function(){
            $('.schedule .sch-header ul.list li a').removeClass('active');
            $(this).addClass('active');
            $('.schedule-inner').hide();

            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });
    }

    function switchRoomInfo(){
        $('.info-inner:not(:first)').hide();
        $('.room-infomation .switch-list ul li a').on('click',function(){
            $('.room-infomation .switch-list ul li a').removeClass('active');
            $(this).addClass('active');
            $('.info-inner').hide();

            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });
    }

    function scrollFixedHeaderTop(){
        // var header = $(".main-header"),
        //     headerHeight = header.outerHeight();
        // header.removeClass('main-header-fixed-top');

        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();
        //     if (scroll >= 300) {
        //         header.addClass("main-header-fixed-top");
        //         if ($('.fix-header').length == 0) {
        //             header.after('<div class="fix-header" style="height:' + headerHeight + 'px"></div>');
        //         }
        //     } else {
        //         header.removeClass("main-header-fixed-top");
        //         $('.fix-header').remove();
        //     }
        // });

        var header = $(".main-header"),
            topheader = $(".top-header"),
            headerHeight = header.outerHeight(),
            topHeight = topheader.outerHeight();

        header.removeClass('main-header-fixed');

        var scrollPos = 0;
        $(window).scroll(function(event){
            //Sets the current scroll position
            var scrollCur = $(this).scrollTop();
            // console.log(scrollCur);
            // console.log(scrollPos);
            //Determines up-or-down scrolling
            if(scrollCur == 0 || scrollCur <= topHeight){
                header.removeClass("main-header-fixed main-header-fixed--pin main-header-fixed--unpin");
                $('.fix-header').remove();
            } else if (scrollCur > scrollPos && scrollCur > 300){
                //Scroll Down
                header.removeClass("main-header-fixed--pin").addClass("main-header-fixed--unpin");
            } else {
                //Scroll Up
                if(scrollCur > 300){
                    header.removeClass("main-header-fixed--unpin").addClass("main-header-fixed main-header-fixed--pin");
                    if($('.fix-header').length == 0){
                        header.after('<div class="fix-header" style="height:' + headerHeight + 'px"></div>');
                    }
                }
            }
            //Updates scroll position
            scrollPos = scrollCur;
        });
    }

    function image2background(){
        $(window).load(function() {
          var image2background = $('.image2background').children('img');
          image2background.before(function () {
            var srcImg = $(this).attr('src');
            return '<div class="item-img" style="background-image: url(' + srcImg + ')">';
          });
        });
    }

    function select2div(){
        if ($('select').length) {
            $('select').select2({
                minimumResultsForSearch: Infinity,
            });
        }
    }

    function countUp(){
        $('.stat-trigger').waypoint(function(direction) {
            jQuery(function($) {
                $('#guest-stay, #book-room, #member-stay, #meal-served').countTo({
                    speed: '1500',
                    refreshInterval: 50
                });
            });
        },{
          offset:'100%',
          triggerOnce: true,
        });
    }

    function disableLink(){
        /* Onclick false for a href="#"
        *********/
        $("body a").on("click", function(e){
            if($(this).attr('href') == '#'){
                e.preventDefault();
            }
        });
    }

    function removeClass(){
        //Append, display navigation fixed for mobile
        var $cat = $('#cat-section'),
            flagResize = 0,
            mediascreen = $cat.data('menu-type'),
            windowWidth = window.innerWidth;
        if(windowWidth <= mediascreen){
            flagResize = 1;
            $cat.removeClass('mtn-10 pt-0').addClass('pt-3');
        }

        $(window).resize(function(){
            var $cat = $('#cat-section'),
            mediascreen = $cat.data('menu-type'),
            windowWidth = window.innerWidth;
            if(windowWidth <= mediascreen){
                flagResize = 1;
                $cat.removeClass('mtn-10 pt-0').addClass('pt-3');
            }
            if(windowWidth > mediascreen){
                flagResize = 0;
                $cat.removeClass('pt-3').addClass('mtn-10 pt-0');
            }
        });

        var $foot_widget = $('footer.footer .widget'),
            $topfoot_widget = $('.top-foot .widget');

        if($foot_widget.hasClass('white') == true || $topfoot_widget.hasClass('white') == true){
            $foot_widget.removeClass('white');
            $topfoot_widget.removeClass('white');
        }
    }

    function popupSubscribe(){
    	if($('.popup').hasClass('pp-active')){
            $('body').addClass('modal-open');
        } else {
            $('body').removeClass('modal-open');
        }

        $('.popup').each(function() {
            var el = $(this),
                elID = el.attr('id');

            $('[href="#' + elID + '"]').on('click', function(e) {
                e.preventDefault();
                el.toggleClass('pp-active');
                $('body').toggleClass('modal-open');
            });
            $('.popup-overlay').on('click', function() {
                el.removeClass('pp-active');
                $('body').removeClass('modal-open');
            });
            $('.popup-close').on('click', function(){
                el.removeClass('pp-active');
                $('body').removeClass('modal-open');
            })
            $('.popup, [href="#' + elID + '"]').on('click', function(e) {
                e.stopPropagation();
            });

            $(window).resize(function(){
            	var windowHeight = window.innerHeight,
            		dialog = $('.popup-dialog'),
            		popHeight = dialog.outerHeight();

            		if(windowHeight < popHeight){
            			dialog.css("position", "relative");
            		} else {
            			dialog.css("position", "absolute");
            		}
            });
        });
    }

    function bookCheckForm(){
        //Append, display navigation fixed for mobile
        var $book = $('.book-check-form'),
            flagResize = 0,
            mediascreen = $book.data('menu-type'),
            windowWidth = window.innerWidth;
        if(windowWidth <= mediascreen){
            flagResize = 1;
            $('<section class="section pt-0 pb-0 book-section"></section>').insertAfter('#homemedia');
            $book.appendTo('.book-section');
            $book.removeClass('book-check-form-2');
        }

        $(window).resize(function(){
            var $book = $('.book-check-form'),
            mediascreen = $book.data('menu-type'),
            windowWidth = window.innerWidth;
            if(windowWidth <= mediascreen && !flagResize){
                flagResize = 1;
                $('<section class="section pt-0 pb-0 book-section"></section>').insertAfter('#homemedia');
                $book.appendTo('.book-section');
                $book.removeClass('book-check-form-2');
            }
            if(windowWidth > mediascreen && flagResize){
                flagResize = 0;
                $book.appendTo('#homemedia');
                $('.book-section').remove();
                $('#book-check-style-2').addClass('book-check-form-2');
            }
        });
    }

    function checkGuestbook2(){
        var check = $('.guestbook-slider'),
            parentRow = check.parent('.row'),
            item = check.find('.item');

        if(check.hasClass('guestbook-slider-2') == true){
            // parentRow.addClass('bg-white');
            var wrap = parentRow.prepend('<div class="pl15 pr15"><div class="gb--wrapper bg-white"></div></div>');
            check.appendTo('.gb--wrapper');
            parentRow.children('.section-title').prependTo('.gb--wrapper');
            if(parentRow.find('.section-title').length != 0){
                $('.gb--wrapper').children('.section-title').addClass('pt-4 mb-3');
            }
            check.addClass('pb-4');

            item.each(function() {
                var image = $(this).find('img'),
                    caption = $(this).find('.gb--caption'),
                    anchor = caption.children('p:first-child');
                image.insertAfter(anchor);
            });
        }
        // console.log(check);
    }

    $(document).ready(function() {
        //Ready
        fnHeader(); // Change top menu to sidebar fixed
        //datepicker(); // Plugin Bootstrap datepicker
        /* #### datepicker for search form #### */
        datepicker_form_search('.book-content #date-1', '.book-content #date-2');
        datepicker_form_search('.sidebar #date-1', '.sidebar #date-2');
        /* #### end datepicker for search form #### */
        /* #### validater search form #### */
        validate_form_search('.book-content .ajax-form-search-room');
        validate_form_search('.sidebar .ajax-form-search-room');
        /* #### end validater search form #### */
        
        changeBook(); // Ready function for change Book button
        homeSlider(); //Ready function Revolution slider
        checkGuestbook2();
        owlCarouselSlider(); // Ready function for Slider Visit
        fixedTop(); // Fixed Top
        changeColorfixedTop(); // Change Color Fixed Top
        galleryThumbBox(); // ThumbBox Gallery
        portfolioIsotope();
        multipleColumn();
        removeMenuType(); // Remove class in Data-menu-type children tag
        easingClick(); // Animate scroll click for Attraction Page
        switchSchedule(); // Switch Schedule Tab
        switchRoomInfo(); //Switch Room Info Tab
        scrollFixedHeaderTop();
        image2background(); //Change img into background-image
        select2div(); // Change Select tag into Div
        countUp(); // Count Animation
        disableLink(); // Disable a href "#"
        removeClass();
        popupSubscribe();
        bookCheckForm();
    });

    $(window).load(function() {
        //Load
        $('#preload').addClass('loading');

        $("<img/>")
            .on('load', function() { console.log("image loaded correctly"); })
            .on('error', function() { console.log("error loading image"); });
    });

    // $(window).resize(function() {
    //     //Resize
    // });

    /*==============================
            Validate message
        ==============================*/
        if($('#send-message-form').length) {
            $('#send-message-form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Please enter your name.",
                        minlength: $.format("At least {0} characters required.")
                    },
                    email: {
                        required: "Please enter your email.",
                        email: "Please enter a valid email."
                    },
                    message: {
                        required: "Please enter a message.",
                        minlength: $.format("At least {0} characters required.")
                    }
                },

                submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        success: function(responseText, statusText, xhr, $form) {
                            $('#contact-content').slideUp(600, function() {
                                $('#contact-content').html(responseText).slideDown(600);
                            });
                        }
                    });
                    return false;
                }
            });
        }

    /* ----------------------------- search form ------------------------- */
    function validate_form_search($selector){
        if($($selector).length){ //console.log($($selector));
            $($selector).validate({
                rules: {
                    arrive: {
                        required: true,
                        minlength: 10
                    },
                    departure: {
                        required: true,
                        minlength: 10
                    },
                    adults:{
                        required: true,
                        minlength: 1
                    },
                    children:{
                       required:false
                    }
                },
                messages: {
                    arrive: {
                        required: "Please enter a arrive.",
                        minlength: $.format("At least {0} characters required.")
                    },
                    departure: {
                        required: "Please enter a departure.",
                        minlength: $.format("At least {0} characters required.")
                    },
                    adults: {
                        required: "Please select number of adults.",
                        minlength: $.format("At least {0} characters required.")
                    },
                },

                submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        success: function(responseText, statusText, xhr, $form) {
                            $(form).parent().append(responseText);
                            $(form).remove();
                        }
                    });
                    return false;
                }
            });

            $($selector + ' #check-available, ' + $selector + ' .check-available').on('click',function(){ console.log( $(this).parents('form:first'));
                $(this).parents('form:first').submit();
            });
        }
    }
})(jQuery);

// function for ajax
 function sendBooking(){
    var $ = jQuery;
    $('#ajax-form-search-send').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            surname: {
                required: false
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: $.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            phone: {
                required: "Please enter your phone.",
                minlength: $.format("At least {0} characters required.")
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    $(form).parent().append(responseText);
                    $(form).remove();
                }
            });
            return false;
        }
    });

     $('#ajax-form-search-send').submit();
    return false;
}