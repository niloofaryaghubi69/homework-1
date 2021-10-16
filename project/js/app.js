$(document).ready(function() {
    $('.main-navbar li').click(function(){
        $('.main-navbar li').removeClass('active');
        $(this).addClass('active');
    });
});