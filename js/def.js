$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});
$(window).on('load', function () {
    $(".def-courtain-background").addClass("pulse-animation");
    $(".main-title").addClass("fade-in-animation");
    $(".main-title-sm").addClass("fade-in-animation");
    $(".def-gradient-background").addClass("fade-in-animation");
    $("#wrapper").removeClass("d-none");
});