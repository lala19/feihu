(function($){
    //头尾文件
    $(function(){
        $("#header-top").load("header.php");
        $("#footer").load("footer.html");
    });
    //滚动条置顶
    (function(){
        $(document).ready(function(){
            $(".fixed").hide();
            $(function(){
                $(window).scroll(function(){
                    if($(window).scrollTop() > 300){
                        $(".fixed").show();
                    } else {
                        $(".fixed").hide();
                    }
                });
                $("#totop").click(function(){
                    $('body,html').animate({scrollTop : 0}, 500);
                });
                $("#totoday").click(function(){
                    var top = $(".seckill").offset().top;
                    $('body,html').animate({scrollTop : top}, 500);
                });
                $("#togoods").click(function(){
                    var top = $(".goods-top").offset().top;
                    $('body,html').animate({scrollTop : top}, 500);
                });
            });
            setTimeout(function(){
                var $script = document.createElement("script");
                $($script).attr("src", "js/lib/swiper/swiper.js");
                $("body").append($script);
                var $script1 = document.createElement("script");
                $($script1).attr("src", "js/lib/lib.js");
                $("body").append($script1);
            }, 500);
        });
    })();
    /*var user = $.getCookie("userinfo");*/
    $(function(){
        /*if(user != ""){
            $(".header_t_left").html("亲爱的 <a href=''>" + user + "</a> 下午好！ <a href='javascript:void(0)' onclick='exit()' id='uexit'>退出</a>");
        }*/
        //我的账户 下拉菜单
        $(".account,.navigation").on("mouseenter", function(){
            $.rotate180($(this).children("b"));
            $(this).css({
                "background" : "#fff",
                "border-left" : "solid 1px #ccc",
                "border-right" : "solid 1px #ccc",
            });
            $(this).children("ul").css("display", "block");
        });
        $(".account,.navigation").on("mouseleave", function(){
            $.cancelrotate180($(this).children("b"));
            $(this).css({
                "background" : "none",
                "border" : "none"
            });
            $(this).children("ul").css("display", "none");
        });
    });

    function exit(){
        $.removeCookie("userinfo");
        window.location.href = "exit.php";
    };

    //购物车pop窗口功能
    (function(){
        var user = $.getCookie("userinfo");
        $(function(){
            if(user != ""){
                $.ajax({
                    url : "./../server/getcart.php",
                    type : "post",
                    data : {
                        "username" : user,
                    },
                    dataType : "json",
                }).then(function(res){
                    if(res){
                        var arr = [];
                        for(var i = 0; i < res.length; i++){
                            var flag = false;
                            var num = 0;
                            for(var j = 0; j < arr.length; j++){
                                if(arr[j].goods_id == res[i].goods_id){
                                    flag = true;
                                    num = res[i].cart_num;
                                    break;
                                }
                            }
                            if(flag){
                                arr[j].cart_num = parseInt(num) + parseInt(arr[j].cart_num);
                            } else {
                                arr.push(res[i])
                            }
                        }
                        var money = 0;
                        for(var i = 0; i < arr.length; i++){
                            var str = `
                     <li class="mycart_pro mycart_pro_hover">
                        <p class="ui_pimg">
                            <a href="./..goodsinfo.html?actionid=${arr[i].goods_id}" class="img">
                                <img src="${arr[i].goods_pic}" width="45" height="45">
                            </a>
                        </p>
                        <ul class="ui_pattribute">
                       <li class="ui_pname">
                                <a href="./..goodsinfo.html?actionid=${arr[i].goods_id}">${arr[i].goods_name}</a>
                            </li>
                            <li class="ui_pprice_e"><b>¥</b><em class="jiage">${arr[i].goods_price}</em>×<span class="shul">${arr[i].cart_num}</span></li>
                            <li class="delete">
                                <a href="javascript:void(0)" data-info="${arr[i].goods_id}" class="deleteitem">删除</a>
                            </li>
                            </ul>
                            </li>`;
                            $("#JcartList").html($("#JcartList").html() + str);
                            money += arr[i].goods_price * arr[i].cart_num
                        }
                        var Jcart_nums = res.length;//数量
                        var Jcart_amount = money;//总价
                        $(".popcart").children("span").html(res.length);

                        $("#Jcart_nums").html(Jcart_nums);
                        $("#Jcart_amount").html(Jcart_amount);
                        //绑定删除
                        $(".deleteitem").on("click", function(){
                            var self = $(this);
                            var datainfo = $(this).attr("data-info");
                            var money = 0;//及时价格
                            var number = 0;//及时数量
                            var jiage = $(this).parent(".delete").parent(".ui_pattribute").parent(".mycart_pro ").siblings();
                            for(var i = 0; i < $(jiage).length; i++){
                                money += parseInt($($(jiage)[i]).find(".jiage").html()) * parseInt($($(jiage)[i]).find(".jiage").siblings("span").html());
                                number += parseInt($($(jiage)[i]).find(".shul").html());
                            }
                            $.ajax({
                                url : "./../server/deletecart.php",
                                type : "post",
                                data : {
                                    "username" : user,
                                    "goodsid" : datainfo
                                },
                                dataType : "json"
                            }).then(function(res){
                                if(res.status == 1){
                                    $(self).parent(".delete").parent(".ui_pattribute").parent(".mycart_pro ").remove();
                                    $(".popcart").children("span").html($(".mycartList").children().length);
                                    if($(".mycartList").children().length == 0){
                                        var stri = `<div style="margin:0 auto; color:red; font-size:12px;text-align:center; width: 140px; height:50px; line-height:50px">购物车是空的,快去买买买!</div>`
                                        $(".cartinfobox").html(stri);
                                    }
                                    $("#Jcart_nums").html(number);
                                    $("#Jcart_amount").html(money);
                                    $(".popcart").children("span").html(number);
                                }
                            })
                        })
                    } else {
                        var stri = `<div style="margin:0 auto; color:red; font-size:12px;text-align:center; width: 140px; height:50px; line-height:50px">购物车是空的,快去买买买!</div>`
                        $(".cartinfobox").html(stri);
                    }
                });
            } else {
                //cookie 获取
                var strCookie = $.getCookie("usercart");
                var res = JSON.parse(strCookie || "[]");
                if(res.length>=1){
                    var arr = [];
                    for(var i = 0; i < res.length; i++){
                        var flag = false;
                        var num = 0;
                        for(var j = 0; j < arr.length; j++){
                            if(arr[j].goods_id == res[i].goods_id){
                                flag = true;
                                num = res[i].cart_num;
                                break;
                            }
                        }
                        if(flag){
                            arr[j].cart_num = parseInt(num) + parseInt(arr[j].cart_num);
                        } else {
                            arr.push(res[i])
                        }
                    }
                    var money = 0;
                    for(var i = 0; i < arr.length; i++){
                        var str = `
                     <li class="mycart_pro mycart_pro_hover">
                        <p class="ui_pimg">
                            <a href="./..goodsinfo.html?actionid=${arr[i].goods_id}" class="img">
                                <img src="${arr[i].goods_pic}" width="45" height="45">
                            </a>
                        </p>
                        <ul class="ui_pattribute">
                       <li class="ui_pname">
                                <a href="./..goodsinfo.html?actionid=${arr[i].goods_id}">${arr[i].goods_name}</a>
                            </li>
                            <li class="ui_pprice_e"><b>¥</b><em class="jiage">${arr[i].goods_price}</em>×<span class="shul">${arr[i].cart_num}</span></li>
                            <li class="delete">
                                <a href="javascript:void(0)" data-info="${arr[i].goods_id}" class="deleteitem">删除</a>
                            </li>
                            </ul>
                            </li>`;
                        $("#JcartList").html($("#JcartList").html() + str);
                        console.log($("#JcartList"));
                        money += arr[i].goods_price * arr[i].cart_num;
                    }
                    var Jcart_nums = res.length;//数量
                    var Jcart_amount = money;//总价
                    $(".popcart").children("span").html(res.length);

                    $("#Jcart_nums").html(Jcart_nums);
                    $("#Jcart_amount").html(Jcart_amount);
                    //绑定删除
                    $(".deleteitem").on("click", function(){
                        var money = 0;//及时价格
                        var number = 0;//及时数量
                        var self = $(this);
                        var jiage = $(this).parent(".delete").parent(".ui_pattribute").parent(".mycart_pro ").siblings();
                        for(var i = 0; i < $(jiage).length; i++){
                            money += parseInt($($(jiage)[i]).find(".jiage").html()) * parseInt($($(jiage)[i]).find(".jiage").siblings("span").html());
                            number += parseInt($($(jiage)[i]).find(".shul").html());
                        }
                        var strCookie = $.getCookie("usercart");
                        var objCookie = JSON.parse(strCookie || "[]");
                        for(var i = 0; i < objCookie.length; i++){
                            if(objCookie[i].goods_id == $(self).attr("data-info")){
                                objCookie.splice(i, 1);
                                if(i==0){
                                    console.log("删除cookie");
                                    $.removeCookie("usercart");
                                    break;
                                }else {
                                    $.setCookie("usercart", objCookie);
                                    break;
                                }
                            }
                        }
                        $(self).parent(".delete").parent(".ui_pattribute").parent(".mycart_pro ").remove();
                        $(".popcart").children("span").html($(".mycartList").children().length);
                        if($(".mycartList").children().length == 0){
                            var stri = `<div style="margin:0 auto; color:red; font-size:12px;text-align:center; width: 140px; height:50px; line-height:50px">购物车是空的,快去买买买!</div>`
                            $(".cartinfobox").html(stri);
                        }
                        $("#Jcart_nums").html(number);
                        $("#Jcart_amount").html(money);
                        $(".popcart").children("span").html(number);
                    })
                } else {
                    // //购物车pop窗口 数量为0判断
                    // if($(".mycartList").children().length == 0){
                    //     var stri = `<div style="margin:0 auto; color:red; font-size:12px;text-align:center; width: 140px; height:50px; line-height:50px">购物车是空的,快去买买买!</div>`
                    //     $(".cartinfobox").html(stri);
                    // }
                    var stri = `<div style="margin:0 auto; color:red; font-size:12px;text-align:center; width: 140px; height:50px; line-height:50px">购物车是空的,快去买买买!</div>`
                    $(".cartinfobox").html(stri);
                }
            }
        })
    })();
    (function(){
        $(function(){
            $(".popcart").on("mouseenter", function(){
                $(".cartinfobox").show();
            });
            $(".cart-con").on("mouseleave", function(){
                $(".cartinfobox").hide();
            })
        })
    })();

    //主页 抢购倒计时
    var starttime = new Date("2018/11/20");
    var timer = setInterval(function(){
        var nowtime = new Date();
        if(nowtime <= 0){
            clearInterval(timer);
        }
        var time = starttime - nowtime;
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        if(hour.toString().length == 1){
            hour = "0" + "" + (hour + "");
        }
        if(minute.toString().length == 1){
            minute = "0" + "" + (minute + "");
        }
        if(seconds.toString().length == 1){
            seconds = "0" + "" + (seconds + "");
        }
        $('.seckill-count-time span:nth-child(1)').html(hour + ":");
        $('.seckill-count-time span:nth-child(2)').html(minute + ":");
        $('.seckill-count-time span:nth-child(3)').html(seconds);
    }, 1000);
    $(document).on("scroll", function(){
        $(".fixed").css("top", $(document).scrollTop() + 100);
        $(".fixed").css("left", $(".main").offset().left + $(".main").width());
        if($(document).scrollTop() >= 400){
            $(".fixed").show();
        }
        if($(document).scrollTop() <= 400){
            $(".fixed").hide();
        }
    });
    //轮播图 图片 获取
    (function(){
        $.ajax({
            url : "./../server/getpic.php",
            data : {
                pic : "轮播图"
            },
            dataType : "json",
            type : "post"
        }).then(function(res){
            for(var i = 0; i < res.length; i++){
                var pic_src = res[i].pic_src;
                var str = `<div class="swiper-slide" style="background:url('${pic_src}') no-repeat center"><a href="#"></a></div>`
                $(".swiper-wrapper").html($(".swiper-wrapper").html() + str)
            }
        });
    })();


    //限时秒杀 商品 获取
    (function(){
        $.ajax({
            url : './../server/getgoods.php',
            data : {
                type : "限时秒杀"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            for(var i = 0; i < 5; i++){
                var obj = res[i];
                var str = `<li>
                <div>
                    <a href="goodsinfo.html?actionid=${obj.goods_id}" class="seckill-goods-img"><img src="${obj.goods_pic}" class="lazy" alt=""><span></span></a>
                    <a href="goodsinfo.html?actionid=${obj.goods_id}" class="seckill-goods-title">
                        <p>${obj.goods_name}</p>
                        <span>${obj.goods_info}</span>
                    </a>
                    <a href="goodsinfo.html?actionid=${obj.goods_id}" class="seckill-goods-buy"><span>¥${obj.goods_price}</span><i>¥${obj.goods_oldprice}</i><em>立即秒杀</em></a>
                </div>
            </li>`;
                $(".seckill-goods").html($(".seckill-goods").html() + str);
            }
        });

    })();
    //手机数码 商品获取
    (function(){
        $.ajax({
            url : './../server/getgoods.php',
            data : {
                type : "手机数码"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            for(var i = 0; i < 6; i++){
                var obj = res[i];
                var goods_id = res[i].goods_id;
                var str = `<li>
                        <div>
                            <a href="goodsinfo.html?actionid=${goods_id}" class="con-item-img">
                                <img src="${obj.goods_pic}" class="lazy" ><i></i>
                            </a>
                            <a href="goodsinfo.html?actionid=${goods_id}">
                                <p>${obj.goods_name}</p>
                                <span>¥${obj.goods_price}</span>
                            </a>
                        </div>
                    </li>`
                $(".phone-item>ul").html($(".phone-item>ul").html() + str);
            }
        });

    })();
    //手机数码 品牌 获取图片
    (function(){
        $.ajax({
            url : "./../server/getpic.php",
            data : {
                pic : "手机数码品牌"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            for(var i = 0; i < 8; i++){
                var obj = res[i];
                var str = `<li>
                    <a href="#"><img src="${obj.pic_src}" class="lazy" alt=""><i></i></a>
                </li>`
                $(".phone-item-brand").html($(".phone-item-brand").html() + str)
            }
        });
    })();

    //手机数码 左侧大图 获取图片
    (function(){
        $.ajax({
            url : "./../server/getpic.php",
            data : {
                pic : "手机数码大图"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            var str1 = `<a href="#">
                    <img src="${res[0].pic_src}" class="lazy" alt="">
                </a>`
            $(".phone-left").html(str1);
            var str2 = `<a href="#">
                    <img src="${res[1].pic_src}" class="lazy" alt="">
                </a>
                <a href="#">
                    <img src="${res[2].pic_src}" class="lazy" alt="">
                </a>`
            $(".phone-right").html(str2);
        });

    })();

    //家用电器
    (function(){
        $.ajax({
            url : './../server/getgoods.php',
            data : {
                type : "家用电器"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            for(var i = 0; i < 6; i++){
                var obj = res[i];
                var str = `<li>
                        <div>
                            <a href="goodsinfo.html?actionid=${obj.goods_id}" class="con-item-img">
                                <img src="${obj.goods_pic}" class="lazy" width="110" ><i></i>
                            </a>
                            <a href="goodsinfo.html?actionid=${obj.goods_id}">
                                <p>${obj.goods_name}</p>
                                <span>¥${obj.goods_price}</span>
                            </a>
                        </div>
                    </li>`
                $(".jiayongdianqi").html($(".jiayongdianqi").html() + str);
            }
        });
    })();
    //家用电器 品牌 获取图片
    (function(){
        $.ajax({
            url : "./../server/getpic.php",
            data : {
                pic : "家用电器品牌"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            for(var i = 0; i < 8; i++){
                var obj = res[i];
                var str = `<li>
                    <a href="#"><img src="${obj.pic_src}" class="lazy" alt=""><i></i></a>
                </li>`
                $(".jiayong-brand").html($(".jiayong-brand").html() + str)
            }
        })
    })();


    //家用电器 左侧大图 获取图片
    (function(){
        $.ajax({
            url : "./../server/getpic.php",
            data : {
                pic : "家用电器大图"
            },
            type : "post",
            dataType : "json"
        }).then(function(res){
            var str1 = `<a href="#">
                    <img src="${res[0].pic_src}" class="lazy" alt="">
                </a>`
            $(".jiayong-left").html(str1);
            var str2 = `<a href="#">
                    <img src="${res[1].pic_src}" class="lazy" alt="">
                </a>
                <a href="#">
                    <img src="${res[2].pic_src}" class="lazy" alt="">
                </a>`
            $(".jiayong-right").html(str2);
        });
    })();
})(jQuery);
