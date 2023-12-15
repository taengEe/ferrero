AOS.init();
$(document).ready(function(){
    $('header').on('mouseover mouseleave', function(event) {
        if (event.type === 'mouseover') {
            $('#logo').attr('src', './imgs/header/hover-logo.png');
        } else{
            $('.logo').attr('src', './imgs/header/logo.png');
            $('.nav-link').removeClass('hovered');
        }
    });
    $('nav').on('mouseover', function(){
        $('.nav-background').slideDown(300);
    });
    $('.nav-background').on('mouseleave', function(){
        $('.nav-background').slideUp(300);
    });
    $('.nav-link').on('mouseover', function(event){
        $('.nav-depth').css('display', 'block');
    });
    $('.nav-link', '.nav-depth').on('mouseleave', function(){
        $('.nav-depth').css('display', 'none');
    });
    $('.nav-background').on('mouseleave', function(){
        $('.nav-background').slideUp(200);
        $('.nav-depth').css('display', 'none');
    });
});
