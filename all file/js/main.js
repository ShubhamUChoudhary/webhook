(function ($) {
    "use strict";

    new WOW().init();  

    /*---background image---*/
    function dataBackgroundImage() {
        $('[data-bgimg]').each(function () {
            var bgImgUrl = $(this).data('bgimg');
            $(this).css({
                'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
            });
        });
    }
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    
    /*---stickey menu---*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        }else{
            $(".sticky-header").addClass("sticky");
        }
    });
    
    /*---jQuery MeanMenu---*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });

    /*---slider activation---*/
    $('.slider3_carousel').owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
        dots: true,
    });
    
    /*---Initialize Swiper---*/      
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 4,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            }
        },
    });

    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 4,
        dynamicBullets: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }, 
        thumbs: {
            swiper: galleryThumbs
        }
    });

/*---product column5 activation---*/
    var caval = parseInt($("#HidRelatebook").val());
    if (caval < 5) {
        $('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
        }).owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,

            autoplayTimeout: 8000,
            items: 5,
            dots: false,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1.3,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },

            }
        });
    }
    else {
        $('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
        }).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,

            autoplayTimeout: 8000,
            items: 5,
            dots: false,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1.3,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },

            }
        });
    }
    function checkClasses(){
        var total = $('.product_column5 .owl-stage .owl-item.active').length;
        
        $(".product_column5").each(function(){
            $(this).find('.owl-item').removeClass('firstActiveItem');
            $(this).find('.owl-item').removeClass('lastActiveItem');
            $(this).find('.owl-item.active').each(function(index){
                if (index === 0) { $(this).addClass('firstActiveItem'); }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('lastActiveItem');
                }
            });  
        });        
    }
    checkClasses();
    
    /*---product column4 activation---*/
    $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:3,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:4,
                },

            }
        });
    
    
    function checkClasses(){
        var total = $('.product_column4 .owl-stage .owl-item.active').length;
        
        $(".product_column4").each(function(){
            $(this).find('.owl-item').removeClass('firstActiveItem');
            $(this).find('.owl-item').removeClass('lastActiveItem');
            $(this).find('.owl-item.active').each(function(index){
                if (index === 0) { $(this).addClass('firstActiveItem'); }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('lastActiveItem');
                }
            });  
        });        
    }
    checkClasses();
    
    /*---product column3 activation---*/
    $('.product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 3,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:3,
                },
                992:{
                    items:2,
                },
                1200:{
                    items:3,
                },

            }
        });    
    
    /*---small product column2 activation---*/
    $('.small_product_column2').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 2,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },

            }
        });
    
    /*---small product column3 activation---*/
    $('.small_product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 6000,
            items: 3,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1200:{
                    items:3,
                },
            }
        });
    
    /*---product column2 activation---*/
    $('.product_column2').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 2,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:2,
                },

            }
        });
    
    /*---product column1 activation---*/
    $('.product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:1,
                },

            }
        });
	
    /*---product sidebar active activation---*/
    $('.product_sidebar_slider').on('changed.owl.carousel initialized.owl.carousel resized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: false,
            loop: true,
            nav: false,
            autoplayTimeout: 8000,
            items: 1,
            dots: false,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:1,
                },
            }        
        });
    
    /*---Category sidebar active activation---*/
    $('.categories_sidebar_slider').owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        autoplayTimeout: 8000,
        items: 1,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:1,
            },
        }
    });
    
    /*---testimonial active activation---*/
    $('.testimonial-two').owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,        
        autoplayTimeout: 8000,
        items: 2,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            992:{
                items:2,
            },

        }
    })
    
    /*---blog column3 activation---*/
    $('.blog_column4').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }, 
            1200:{
                items:4,
            },             
        }
    });
    
    /*---brand container activation---*/
    $('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 5,
            dots:false,
            navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'], 
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                560:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                },
            }
        });
    
    /*---blog thumb activation---*/
    $('.blog_thumb_active').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
    });
    
    /*---single product activation---*/
    $('.single-product-active').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin:15,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            320:{
                items:2,
                margin:10,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },
        }
    }); 
   
    /*---product navactive activation---*/
    $('.product_navactive').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            250:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:4,
            },		  
        }
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.product_navactive').resize();
    })

    $('.product_navactive a').on('click',function(e){
        e.preventDefault();

        var $href = $(this).attr('href');

        $('.product_navactive a').removeClass('active');
        $(this).addClass('active');

        $('.product-details-large .tab-pane').removeClass('active show');
        $('.product-details-large '+ $href ).addClass('active show');
    })
       
    /*--- video Popup---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
    /*--- Magnific Popup Video---*/
    $('.port_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*--- Tooltip Active---*/
    $('.action_links ul li a,.add_to_cart a,.footer_social_link ul li a').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });
    
    /*--- niceSelect---*/
    $('.select_option').niceSelect();
    
    /*---  Accordion---*/
    $(".faequently-accordion").collapse({
        accordion:true,
        open: function() {
            this.slideDown(300);
        },
        close: function() {
            this.slideUp(300);
        }		
    });	  

    /*--- counterup activation ---*/
    $('.counter_number').counterUp({
        delay: 10,
        time: 1000
    });

    /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });   
    
    /*---countdown activation---*/
		
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'));     
               
        });
    });	
    
    /*---slider-range here---*/
    $( "#slider-range" ).slider({
        range: true,
        min: 100,
        max: 500,
        values: [ 100, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "₹" + ui.values[ 0 ] + " - ₹" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "₹" + $( "#slider-range" ).slider( "values", 0 ) +
       " - ₹" + $( "#slider-range" ).slider( "values", 1 ) );
    
    /*---niceSelect---*/
    $('.niceselect_option').niceSelect();
    
    /*---elevateZoom---*/
    $("#zoom1").elevateZoom({
        gallery:'gallery_01', 
        responsive : true,
        cursor: 'crosshair',
        zoomType : 'inner'
    
    });  
    
    /*---portfolio Isotope activation---*/
    $('.portfolio_gallery').imagesLoaded( function() {

        var $grid = $('.portfolio_gallery').isotope({
            itemSelector: '.gird_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gird_item'
            }
        });

        /*---ilter items on button click---*/
        $('.portfolio_button').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        });
       
    });
    
    /*---widget sub categories---*/
    $(".widget_sub_categories > a").on("click", function() {
        $(this).toggleClass('active');
        $('.widget_dropdown_categories').slideToggle('medium');
    }); 
    
    
    /*---categories slideToggle---*/
    $(".categories_title").on("click", function() {
        $(this).toggleClass('active');
        $('.categories_menu_toggle').slideToggle('medium');
    }); 

    /*---widget sub categories---*/
    $(".sub_categories1 > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_categories1').slideToggle('medium');
    }); 
    
    /*---widget sub categories---*/
    $(".sub_categories2 > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_categories2').slideToggle('medium');
    }); 
    
    /*---widget sub categories---*/
    $(".sub_categories3 > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_categories3').slideToggle('medium');
    }); 
    
    /*----------  Category more toggle  ----------*/

    $(".categories_menu_toggle li.hidden").hide();
    $("#more-btn").on('click', function (e) {

        e.preventDefault();
        $(".categories_menu_toggle li.hidden").toggle(500);
        var htmlAfter = '<i class="fa fa-minus" aria-hidden="true"></i> Less Categories';
        var htmlBefore = '<i class="fa fa-plus" aria-hidden="true"></i> More Categories';


        if ($(this).html() == htmlBefore) {
            $(this).html(htmlAfter);
        } else {
            $(this).html(htmlBefore);
        }
    });    
    
    /*---MailChimp---*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });
    function mailChimpResponse(resp) {

        if (resp.result === 'success') {
            $('.mailchimp-success').addClass('active')
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
    
    /*---Category menu---*/
    //function categorySubMenuToggle(){
    //    $('.categories_menu_toggle li.menu_item_children > a').on('click', function(){
    //        if($(window).width() < 992){
    //            $(this).removeAttr('href');
    //            var element = $(this).parent('li');
    //            if (element.hasClass('open')) {
    //                element.removeClass('open');
    //                element.find('li').removeClass('open');
    //                element.find('ul').slideUp();
    //            }
    //            else {
    //                element.addClass('open');
    //                element.children('ul').slideDown();
    //                element.siblings('li').children('ul').slideUp();
    //                element.siblings('li').removeClass('open');
    //                element.siblings('li').find('li').removeClass('open');
    //                element.siblings('li').find('ul').slideUp();
    //            }
    //        }
    //    });
    //    $('.categories_menu_toggle li.menu_item_children > a').append('<span class="expand"></span>');
    //}
    //categorySubMenuToggle();


    /*---shop grid activation---*/
    $('.shop_toolbar_btn > button').on('click', function (e) {
        
        e.preventDefault();
        
        $('.shop_toolbar_btn > button').removeClass('active');
        $(this).addClass('active');
        
        var parentsDiv = $('.shop_wrapper');
        var viewMode = $(this).data('role');
        
        
        parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

        if(viewMode == 'grid_3'){
            parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
            
        }

        if(viewMode == 'grid_4'){
            parentsDiv.children().addClass('col-lg-3 col-md-4 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
        }
        
        if(viewMode == 'grid_list'){
            parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5');
        }            
    });  
    
    /*---Newsletter Popup activation---*/
   
    setTimeout(function() {
        if($.cookie('shownewsletter')==1) $('.newletter-popup').hide();
        $('#subscribe_pemail').keypress(function(e) {
            if(e.which == 13) {
                e.preventDefault();
                email_subscribepopup();
            }
            var name= $(this).val();
            $('#subscribe_pname').val(name);
        });
        $('#subscribe_pemail').change(function() {
            var name= $(this).val();
            $('#subscribe_pname').val(name);
        });
        //transition effect
        if($.cookie("shownewsletter") != 1){
            $('.newletter-popup').bPopup();
        }
        $('#newsletter_popup_dont_show_again').on('change', function(){
            if($.cookie("shownewsletter") != 1){   
                $.cookie("shownewsletter",'1')
            }else{
                $.cookie("shownewsletter",'0')
            }
        }); 
    }, 2500);
    
    
    /*---search box slideToggle---*/
    $(".search_box > a").on("click", function() {
        $(this).toggleClass('active');
        $('.search_widget').slideToggle('medium');
    }); 
    
    
    /*---mini cart activation---*/
    $('.mini_cart_wrapper > a').on('click', function(){
        $('.mini_cart,.off_canvars_overlay').addClass('active')
    });
    
    $('.mini_cart_close,.off_canvars_overlay').on('click', function(){
        $('.mini_cart,.off_canvars_overlay').removeClass('active')
    });
    

    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });
    
    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });
    
    
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu|menu_item_children)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
            $this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children|menu_item_children')\b/) ){
            $this.toggleClass('menu-open');
        }
    });
    
    
    /*js ripples activation*/
    $('.js-ripples').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });
    
    
})(jQuery);	

// logo slider js
$(document).ready(function(){

    if($('.brands_slider').length)
    {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel(
        {
            loop:true,
            autoplay:true,
            autoplayTimeout:5000,
            nav:false,
            dots:false,
            autoWidth:true,
            items:8,
            margin:42
        });

        if($('.brands_prev').length)
        {
            var prev = $('.brands_prev');
            prev.on('click', function()
            {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if($('.brands_next').length)
        {
            var next = $('.brands_next');
            next.on('click', function()
            {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }


});

// mega dropdown jquery

jQuery(document).ready(function($){
    //open/close mega-navigation
    $('.cd-dropdown-trigger').on('click', function(event){
        event.preventDefault();
        toggleNav();
    });

    //close meganavigation
    $('.cd-dropdown .cd-close').on('click', function(event){
        event.preventDefault();
        toggleNav();
    });

    //on mobile - open submenu
    $('.has-children').children('a').on('click', function(event){
        //prevent default clicking on direct children of .has-children 
        event.preventDefault();
        var selected = $(this);
        selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
    });

    //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
    var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
    $('.cd-dropdown-content').menuAim({
        activate: function(row) {
            $(row).children().addClass('is-active').removeClass('fade-out');
            if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
            $(row).children().removeClass('is-active');
            if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
                $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
                $(row).children('ul').addClass('fade-out')
            }
        },
        exitMenu: function() {
            $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
            return true;
        },
        submenuDirection: submenuDirection,
    });

    //submenu items - go back link
    $('.go-back').on('click', function(){
        var selected = $(this),
            visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
        selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
    }); 

    function toggleNav(){
        var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
        $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
        if( !navIsVisible ) {
            $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('.has-children ul').addClass('is-hidden');
                $('.move-out').removeClass('move-out');
                $('.is-active').removeClass('is-active');
            }); 
        }
    }

    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    if(!Modernizr.input.placeholder){
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }
});


(function($) {

    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop
            }, opts);

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
            mouseLocs.push({x: e.pageX, y: e.pageY});

            if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                mouseLocs.shift();
            }
        };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // If exitMenu is supplied and returns true, deactivate the
            // currently active row on menu exit.
            if (options.exitMenu(this)) {
                if (activeRow) {
                    options.deactivate(activeRow);
                }

                activeRow = null;
            }
        };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
            if (timeoutId) {
                // Cancel any previous activation delays
                clearTimeout(timeoutId);
            }

            options.enter(this);
            possiblyActivate(this);
        },
            mouseleaveRow = function() {
                options.exit(this);
            };

        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
            activate(this);
        };

        /**
         * Activate a menu row.
         */
        var activate = function(row) {
            if (row == activeRow) {
                return;
            }

            if (activeRow) {
                options.deactivate(activeRow);
            }

            options.activate(row);
            activeRow = row;
        };
        var possiblyActivate = function(row) {
            var delay = activationDelay();

            if (delay) {
                timeoutId = setTimeout(function() {
                    possiblyActivate(row);
                }, delay);
            } else {
                activate(row);
            }
        };

        var activationDelay = function() {
            if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
                // If there is no other submenu row already active, then
                // go ahead and activate immediately.
                return 0;
            }

            var offset = $menu.offset(),
                upperLeft = {
                    x: offset.left,
                    y: offset.top - options.tolerance
                },
                upperRight = {
                    x: offset.left + $menu.outerWidth(),
                    y: upperLeft.y
                },
                lowerLeft = {
                    x: offset.left,
                    y: offset.top + $menu.outerHeight() + options.tolerance
                },
                lowerRight = {
                    x: offset.left + $menu.outerWidth(),
                    y: lowerLeft.y
                },
                loc = mouseLocs[mouseLocs.length - 1],
                prevLoc = mouseLocs[0];

            if (!loc) {
                return 0;
            }

            if (!prevLoc) {
                prevLoc = loc;
            }

            if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                // If the previous mouse location was outside of the entire
                // menu's bounds, immediately activate.
                return 0;
            }

            if (lastDelayLoc &&
                    loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                return 0;
            }

            function slope(a, b) {
                return (b.y - a.y) / (b.x - a.x);
            };

            var decreasingCorner = upperRight,
                increasingCorner = lowerRight;
            if (options.submenuDirection == "left") {
                decreasingCorner = lowerLeft;
                increasingCorner = upperLeft;
            } else if (options.submenuDirection == "below") {
                decreasingCorner = lowerRight;
                increasingCorner = lowerLeft;
            } else if (options.submenuDirection == "above") {
                decreasingCorner = upperLeft;
                increasingCorner = upperRight;
            }

            var decreasingSlope = slope(loc, decreasingCorner),
                increasingSlope = slope(loc, increasingCorner),
                prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                prevIncreasingSlope = slope(prevLoc, increasingCorner);

            if (decreasingSlope < prevDecreasingSlope &&
                    increasingSlope > prevIncreasingSlope) {
                lastDelayLoc = loc;
                return DELAY;
            }

            lastDelayLoc = null;
            return 0;
        };
        $menu
            .mouseleave(mouseleaveMenu)
            .find(options.rowSelector)
                .mouseenter(mouseenterRow)
                .mouseleave(mouseleaveRow)
                .click(clickRow);

        $(document).mousemove(mousemoveDocument);
    };
})(jQuery);

// tooltip js
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//quantity plus minus js
//-----------------------------
$(document).ready(function() {
    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
        if($(this).hasClass('minus')) {
            var count = parseFloat($input.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count < 2) {
                $(this).addClass('dis');
            }
            else {
                $(this).removeClass('dis');
            }
            $input.val(count);
        }
        else {
            var count = parseFloat($input.val()) + 1
            $input.val(count);
            if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
            }
        }    
        $input.change();
        return false;
    });  
});

//------------- read less read more-----------------
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 350;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        } 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});