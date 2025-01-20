$(document).ready(function(){
    setTimeout(()=>{
        $('#loading-screen').fadeOut(); 
        $('.page').fadeIn(); 
    },1000)
    var typed = new Typed('#element', {
        strings: ['Success', 'Grow Up','Dream'],
        typeSpeed: 100,
        backDelay: 700,
        smartBackspace: true,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
    });
    $("#owl-demo").owlCarousel({
        items : 5,
        autoPlay :true,
        goToFirst :true,
        slideSpeed:200,
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    getBtnTarget = target => $(target).offset().top+$(target).outerHeight()
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        var scrollBtn = scrollPosition + $(this).height();
        if (scrollPosition> $('#navbar').outerHeight()) {
            $('#navbar').addClass('navbar-mov');
            $('.navbar .navbar-nav > li > a').removeClass('text-white').addClass('nav-scroll-a');
            $('.navbar .social i').removeClass('text-white').addClass('nav-scroll-a');
            $('.navbar .container img').attr("src", 'image/logo-blue.png');
        }
        if(scrollPosition == 0 ){
            $('#navbar').removeClass('navbar-mov');
            $('.navbar .navbar-nav > li > a').removeClass('nav-scroll-a').addClass('text-white');
            $('.navbar .social i').removeClass('nav-scroll-a').addClass('text-white');
            $('.navbar .container img').attr("src", 'image/logo-white.png');
        }
        if ( getBtnTarget('.bar-80') <= scrollBtn ) {
            $('.bar-80 .progress-bar').css('width','80%')
            $('.bar-80 .progress-head span').delay(1000).fadeIn(500)
        }
        if ( getBtnTarget('.bar-95') <= scrollBtn ) {
            $('.bar-95 .progress-bar').css('width','95%')
            $('.bar-95 .progress-head span').delay(1000).fadeIn(500)
        }
        if ( getBtnTarget('.bar-85') <= scrollBtn ) {
            $('.bar-85 .progress-bar').css('width','85%')
            $('.bar-85 .progress-head span').delay(1000).fadeIn(500)
        }
        if ( getBtnTarget('.bar-70') <= scrollBtn ) {
            $('.bar-70 .progress-bar').css('width','70%')
            $('.bar-70 .progress-head span').delay(1000).fadeIn(500)
        }
    })
    let selectedBranding = $('.overlay-info p:contains("Branding")').parents('.col-lg-3');
    let selectedDesign = $('.overlay-info p:contains("Web Design")').parents('.col-lg-3');
    let selectedPhotography = $('.overlay-info p:contains("Photography")').parents('.col-lg-3');
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    function filterData(activeElement,fadeInElement,fadeOutElement) {
        $(activeElement).addClass('active');
        $(activeElement).siblings().removeClass('active');
        if (Array.isArray(fadeInElement)) {
            fadeInElement.forEach(function(selector) {
                $(selector).fadeIn(); 
            });
        } else {
            fadeInElement.fadeIn()
        }
        if (fadeOutElement !== undefined) {
            if (Array.isArray(fadeOutElement)) {
                fadeOutElement.forEach(function(selector) {
                    $(selector).fadeOut(); 
                });
            } else {
                fadeOutElement.fadeOut()
            }
        }
    };
    function coloseVideo() {
        $('.layout-video').addClass('d-none');
        $('body').css('overflow','auto');
    };
    $('.all').click(function(){
        filterData('.all',[selectedBranding, selectedDesign, selectedPhotography])
    });
    $('.branding').click(function(){
        filterData('.branding',selectedBranding,[selectedDesign,selectedPhotography])
    });
    $('.web-design').click(function(){
        filterData('.web-design',selectedDesign,[selectedBranding,selectedPhotography])
    });
    $('.photography').click(function(){
        filterData('.photography',selectedPhotography,[selectedBranding,selectedDesign])
    });
    $('.play-video i').click(()=> {
        $('.layout-video').removeClass('d-none');
        $('body').css('overflow','hidden');
    });
    $('.layout-video').click(()=>{
        coloseVideo();
    });
    $('.video-close').click(()=>{
        coloseVideo();
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true, 
        centerPadding: '0px' ,
    });
    // console.log($('input[placeholder="Name"]').val());
    
    function checkInput(input,regex) {
        if ($(input).val()=='') {
            $(input).next().removeClass('d-none');
            $(input).next().text("The field is required.");
            console.log('required');
            
        };
        if ( !regex.test($(input).val()) && $(input).val() !=='') {
            $(input).next().removeClass('d-none');
            $(input).next().text("not valid.");
            console.log('invalid');
            
        }
        if (regex.test($(input).val())) {
            $(input).next().addClass('d-none');
        }
    }
    $('.contact button').click(()=>{
        checkInput('input[placeholder="Name"]',nameRegex);
        checkInput('input[placeholder="Email"]',emailRegex);
        checkInput('input[placeholder="Subject"]',nameRegex);
    })
})