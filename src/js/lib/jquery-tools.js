(function(){
    $.extend({
        rotate180:function(ele){
            $(ele).css({
                "transform":"rotate(-180deg)",
                "transition":"transform .2s ease-in"
            })
        },
        cancelrotate180:function(ele){
            $(ele).css({
                "transform":"rotate(-360deg)",
                "transition":"transform .2s ease-in"
            })
        }
    })
})(jQuery);