((function($){

    //我的账户 下拉菜单
    $(".account,.navigation").on("mouseenter",function(){
        $.rotate180($(this).children("b"));
        $(this).css({
            "background":"#fff",
            "border-left":"solid 1px #ccc",
            "border-right":"solid 1px #ccc",
        });
        $(this).children("ul").css("display","block");
    });
    $(".account,.navigation").on("mouseleave",function(){
        $.cancelrotate180($(this).children("b"));
        $(this).css({
            "background":"none",
            "border":"none"
        });
        $(this).children("ul").css("display","none");
    });
}))(jQuery);