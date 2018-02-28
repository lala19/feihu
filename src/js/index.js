(function($){
    var starttime = new Date("2018/11/20");
    var timer=setInterval(function () {
        var nowtime = new Date();
        if(nowtime<=0){
            clearInterval(timer);
        }
        var time = starttime - nowtime;
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        if(hour.toString().length==1){
            hour="0"+""+(hour+"");
        }
        if(minute.toString().length==1){
            minute="0"+""+(minute+"");
        }
        if(seconds.toString().length==1){
            seconds="0"+""+(seconds+"");
        }
        $('.seckill-count-time span:nth-child(1)').html( hour+":");
        $('.seckill-count-time span:nth-child(2)').html( minute+":");
        $('.seckill-count-time span:nth-child(3)').html( seconds);
    }, 1000);
    $(document).on("scroll",function(){
        $(".fixed").css("top",$(document).scrollTop()+100);
        $(".fixed").css("left",$(".main").offset().left+$(".main").width());
        if($(document).scrollTop()>=400){
            $(".fixed").show();
        }
        if($(document).scrollTop()<=400){
            $(".fixed").hide();
        }
    });

})(jQuery);