(function($){
    //主页 抢购倒计时
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
    //轮播图 图片 获取
    $.ajax({
        url: "http://127.0.0.1/FeiHu/server/getpic.php",
        data: {
            pic:"轮播图"
        },
        dataType: "json",
        type: "post"
    }).then(function(res){
        for(var i = 0; i < res.length; i++){
            var pic_src = res[i].pic_src;
            var str = `<div class="swiper-slide" style="background:url('${pic_src}') no-repeat center"><a href="#"></a></div>`
            $(".swiper-wrapper").html($(".swiper-wrapper").html() + str)
        }
    });


    //限时秒杀 商品 获取
    $.ajax({
        url:'http://127.0.0.1/FeiHu/server/getgoods.php',
        data:{
          type:"限时秒杀"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
        for (var i=0; i<5; i++) {
            var obj=res[i];
            var str=`<li>
                <div>
                    <a href="goodsinfo.html" class="seckill-goods-img"><img src="${obj.goods_pic}" class="lazy" alt=""><span></span></a>
                    <a href="goodsinfo.html" class="seckill-goods-title">
                        <p>${obj.goods_name}</p>
                        <span>${obj.goods_info}</span>
                    </a>
                    <a href="goodsinfo.html" class="seckill-goods-buy"><span>¥${obj.goods_price}</span><i>¥${obj.goods_oldprice}</i><em>立即秒杀</em></a>
                </div>
            </li>`;
            $(".seckill-goods").html($(".seckill-goods").html()+str);
        }
    });

    //手机数码 商品获取
    $.ajax({
        url:'http://127.0.0.1/FeiHu/server/getgoods.php',
        data:{
            type:"手机数码"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
        for(var i=0; i<6; i++){
            var obj=res[i];
            var str=`<li>
                        <div>
                            <a href="goodsinfo.html" class="con-item-img">
                                <img src="${obj.goods_pic}" class="lazy" ><i></i>
                            </a>
                            <a href="goodsinfo.html">
                                <p>${obj.goods_name}</p>
                                <span>¥${obj.goods_price}</span>
                            </a>
                        </div>
                    </li>`
            $(".phone-item>ul").html($(".phone-item>ul").html()+str);
        }
    });

    //手机数码 品牌 获取图片
    $.ajax({
        url:"http://127.0.0.1/FeiHu/server/getpic.php",
        data:{
          pic:"手机数码品牌"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
        for(var i=0; i<8; i++){
            var obj=res[i];
            var str=`<li>
                    <a href="#"><img src="${obj.pic_src}" class="lazy" alt=""><i></i></a>
                </li>`
            $(".phone-item-brand").html($(".phone-item-brand").html()+str)
        }
    });

    //手机数码 左侧大图 获取图片
    $.ajax({
        url:"http://127.0.0.1/FeiHu/server/getpic.php",
        data:{
            pic:"手机数码大图"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
       var str1=`<a href="#">
                    <img src="${res[0].pic_src}" alt="">
                </a>`
        $(".phone-left").html(str1);
        var str2=`<a href="#">
                    <img src="${res[1].pic_src}" alt="">
                </a>
                <a href="#">
                    <img src="${res[2].pic_src}" alt="">
                </a>`
        $(".phone-right").html(str2);
    });


    //家用电器
    $.ajax({
        url:'http://127.0.0.1/FeiHu/server/getgoods.php',
        data:{
            type:"家用电器"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
        for(var i=0; i<6; i++){
            var obj=res[i];
            var str=`<li>
                        <div>
                            <a href="goodsinfo.html" class="con-item-img">
                                <img src="${obj.goods_pic}" class="lazy" width="110" ><i></i>
                            </a>
                            <a href="goodsinfo.html">
                                <p>${obj.goods_name}</p>
                                <span>¥${obj.goods_price}</span>
                            </a>
                        </div>
                    </li>`
            $(".jiayongdianqi").html($(".jiayongdianqi").html()+str);
        }
    });
    //家用电器 品牌 获取图片
    $.ajax({
        url:"http://127.0.0.1/FeiHu/server/getpic.php",
        data:{
            pic:"家用电器品牌"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
        for(var i=0; i<8; i++){
            var obj=res[i];
            var str=`<li>
                    <a href="#"><img src="${obj.pic_src}" class="lazy" alt=""><i></i></a>
                </li>`
            $(".jiayong-brand").html($(".jiayong-brand").html()+str)
        }
    })


    //家用电器 左侧大图 获取图片
    $.ajax({
        url:"http://127.0.0.1/FeiHu/server/getpic.php",
        data:{
            pic:"家用电器大图"
        },
        type:"post",
        dataType:"json"
    }).then(function(res){
        var str1=`<a href="#">
                    <img src="${res[0].pic_src}" alt="">
                </a>`
        $(".jiayong-left").html(str1);
        var str2=`<a href="#">
                    <img src="${res[1].pic_src}" alt="">
                </a>
                <a href="#">
                    <img src="${res[2].pic_src}" alt="">
                </a>`
        $(".jiayong-right").html(str2);
    });
})(jQuery);