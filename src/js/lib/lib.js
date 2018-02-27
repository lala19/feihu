$(function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".slide").on("mouseenter",function(){
        $(".swiper-button-next").animate({"opacity":0.5},500);
        $(".swiper-button-prev").animate({"opacity":0.5},500);
        swiper.autoplay.stop();
    }).on("mouseleave",function(){
        $(".swiper-button-next").animate({"opacity":0},500);
        $(".swiper-button-prev").animate({"opacity":0},500);
        swiper.autoplay.start();
    })
});