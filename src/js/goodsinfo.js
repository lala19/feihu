(function($){
    $(function(){
        //登录 用户名
        (function(){
            var user = $.getCookie("userinfo");
            $(function(){
                if(user != ""){
                    $(".header_t_left").html("亲爱的 <a href=''>" + user + "</a> 下午好！ <a href='javascript:void(0)' onclick='exit()' id='uexit'>退出</a>");
                }
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
        })();

        //用户退出函数
        function exit(){
            $.removeCookie("userinfo");
            window.location.href = "index.php";
        };
        //获取商品信息
        (function(){
            //获取url的actionid
            var action = window.location.href;
            var actionid = action.split("?")[1].split("=")[1];
            $.ajax({
                url : "./../server/goodsinfo.php",
                type : "post",
                data : {
                    "goodsid" : actionid
                },
                dataType : "json"
            }).then(function(res){
                var result = res[0];
                //最近浏览的商品 cookie
                var strCookie=$.getCookie("browser");
                var objCookie=JSON.parse(strCookie||"[]");
                var obj={
                    goods_pic:result.goods_pic,
                    goods_name:result.goods_name,
                    goods_price:result.goods_price,
                    location:action
                };
                objCookie.unshift(obj);
                if(objCookie.length>=8){
                    objCookie.splice(7,1);
                }
                $.setCookie("browser",JSON.stringify(objCookie),1);
                if(objCookie.length>=1){
                    $(".recently-item").html("");
                    for(var i=0; i<objCookie.length; i++){
                        var goodsname=objCookie[i].goods_name;
                        var str=`<li>
                                <div class="rank-pro-name">${goodsname}</div>
                                <p class="rank-por-price"><b>¥</b><em>${objCookie[i].goods_price}</em></p>
                                <div class="rank-img">
                                    <a href="${objCookie[i].location}">
                                        <img width="75px" height="75px" src="${objCookie[i].goods_pic}" alt="">
                                    </a>
                                </div>
                            </li>`;
                        $(".recently-item").append(str);
                    }
                }
                var typecolor = JSON.parse((result.goods_typeinfo))[0];
                var typenum = JSON.parse((result.goods_typeinfo))[1];
                if(result.goods_typeinfo != undefined){
                    for(var i = 0; i < typecolor.length; i++){
                        var strcolor = `<li>${typecolor[i]}</li>`;
                        $(".typecolor").html($(".typecolor").html() + strcolor)
                        $(".typecolor").children("li").on("click", function(){
                            $(this).addClass("currcolor").siblings("li").removeClass("currcolor");
                            $(".msgcolor").html($(this).html());
                        });
                    }
                    for(var i = 0; i < typenum.length; i++){
                        var strnnum = `<li>${typenum[i]}</li>`;
                        $(".typenum").html($(".typenum").html() + strnnum)
                        $(".typenum").children("li").on("click", function(){
                            $(this).addClass("currcolor").siblings("li").removeClass("currcolor");
                            $(".msgtype").html($(this).html());
                        })
                    }
                }
                $(".feihuprice").html(result.goods_price);
                $(".goodname").html(result.goods_name);
                $(".middleimg").attr("src", result.goods_pic);
                $(".goodstype").html(result.goods_type);
                $(".goodstypeinfo").html(result.goods_info);
            });
        })();
        //商品信息选购商品
        (function(){
            var $goodcolor = $(".good-color").children("ul").children("li");
            var $goodtype = $(".good-type").children("ul").children("li");
            var msgcolor = $(".sel-good").children("b").children("span")[0];
            var msgtype = $(".sel-good").children("b").children("span")[1];
            $goodcolor.on("click", function(){
                $(this).addClass("currcolor").siblings("li").removeClass("currcolor");
                $(msgcolor).html($(this).html());
            });
            $goodtype.on("click", function(){
                $(this).addClass("currcolor").siblings("li").removeClass("currcolor");
                $(msgtype).html($(this).html());
            })
            $(".num").children("span:nth-of-type(1)").on("click", function(){
                var $num = parseInt($("#good-num").val()) - 1;
                if($num >= 1){
                    $("#good-num").val($num);
                }
            });
            $(".num").children("span:nth-of-type(2)").on("click", function(){
                var $num = parseInt($("#good-num").val()) + 1;
                if($num <= 99){
                    $("#good-num").val($num);
                }
            });
        })();
        //商品信息tab栏.  rank list  同类销量排行
        (function(){
            $(".rank-tab").children("li").on("mouseenter", function(){
                var $index = $(this).index();
                $(this).addClass("rank-tab-curr").siblings("li").removeClass("rank-tab-curr");
                $(".rank-list").children("ul").eq($index).css("display", "block").siblings("ul").css("display", "none");
            });
            $(".tab-item").children("li").on("mouseenter", function(){
                $(this).addClass("rank-list-cuur").siblings("li").removeClass("rank-list-cuur");
            });
        })();
        // 清空浏览记录
        (function(){
            $(".clear").on("click", function(){

            });
        })();
        //产品信息,用户评论... tab切换
        (function(){
            $(".good-tab").children("li").on("click", function(){
                var $index = $(this).index();
                $(this).addClass("tabcurr").siblings("li").removeClass("tabcurr");
                $(".good-tab-con").children("div").eq($index).css("display", "block").siblings("div").css("display", "none");
            });
            $(".comment-tab").children("li").on("click", function(){
                $(this).addClass("tabcurr").siblings("li").removeClass("tabcurr");
            });
            $(".consult-tab").children("li").on("click", function(){
                $(this).addClass("tabcurr").siblings("li").removeClass("tabcurr");
            })
        })();
        //导航栏 全部商品分类 菜单
        (function(){
            $(".nav-allgoods").on("mouseenter", function(){
                $(this).addClass("nav-allgoods-curr");
            }).on("mouseleave", function(){
                $(this).removeClass("nav-allgoods-curr");
            });
            $(".cotegory-item").on("mouseenter", function(){
                $(this).addClass("cotegory-item-curr");
            }).on("mouseleave", function(){
                $(this).removeClass("cotegory-item-curr");
            });
            $(".close-item").on("click", function(){
                $(".nav-allgoods").removeClass("nav-allgoods-curr");
            })
        })();
        //放大镜图片列表
        (function(){
            var action = window.location.href;
            var actionid = action.split("?")[1].split("=")[1];
            $.ajax({
                url : "./../server/goodsinfoimg.php",
                type : "post",
                data : {
                    "goodsid" : actionid
                },
                dataType : "json"
            }).then(function(res){
                /*console.log(res);*/
                if(res[0].goods_imgs){
                   var obj=JSON.parse(res[0].goods_imgs);
                   var middleimg=[];
                   var bigimg=[];
                    for(var i=0; i<parseInt(obj.img_num); i++){
                        var strS = "images/goodsimg/"+obj.img_id+"-s-"+(i+1)+".jpg";
                        var strM = "images/goodsimg/"+obj.img_id+"-m-"+(i+1)+".jpg";
                        middleimg.push(strM);
                        bigimg.push(strM);
                        $(".img-list-con").children("li").eq(i).children("img").attr("src",strS);
                    }
                    $(".img-list-con").children().on("mouseenter", function(){
                        var index = $(this).index();
                        $(this).addClass("curr").siblings("li").removeClass("curr");
                        $(".middleimg").attr("src", middleimg[index]);
                        $("#bigimg").attr("src", bigimg[index]);
                    });
                    $(".imgview-list-left,.imgview-list-right").on("click", function(){
                        console.log(parseInt($(".img-list-con").css("left")));
                        if(parseInt($(".img-list-con").css("left")) == 6){
                            $(".img-list-con").css("left", "-274px");
                        } else {
                            $(".img-list-con").css("left", "6px");
                        }
                    });
                }else {
                    var middleimg = [
                        "http://image.efeihu.com/images/wap/android/fb715b9d-2dd6-4647-ace3-488c27babb53.jpg",
                        "http://image.efeihu.com/images/wap/android/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
                        "http://image.efeihu.com/images/wap/android/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg",
                        "http://image.efeihu.com/images/wap/android/e09e09ca-3f0f-4244-a91f-75284d6d37f5.jpg",
                        "http://image.efeihu.com/images/wap/android/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
                        "http://image.efeihu.com/images/wap/android/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg",
                    ];
                    var bigimg = [
                        "images/goodsinfo/bigview.jpg",
                        "http://image.efeihu.com/images/pdtimage/img_middle/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
                        "http://image.efeihu.com/images/pdtimage/img_middle/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg",
                        "http://image.efeihu.com/images/pdtimage/img_middle/e09e09ca-3f0f-4244-a91f-75284d6d37f5.jpg",
                        "http://image.efeihu.com/images/pdtimage/img_middle/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
                        "http://image.efeihu.com/images/pdtimage/img_middle/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg"
                    ];
                    $(".img-list-con").children().on("mouseenter", function(){
                        var index = $(this).index();
                        $(this).addClass("curr").siblings("li").removeClass("curr");
                        $(".middleimg").attr("src", middleimg[index]);
                        $("#bigimg").attr("src", bigimg[index]);
                    });
                    $(".imgview-list-left,.imgview-list-right").on("click", function(){
                        console.log(parseInt($(".img-list-con").css("left")));
                        if(parseInt($(".img-list-con").css("left")) == 6){
                            $(".img-list-con").css("left", "-274px");
                        } else {
                            $(".img-list-con").css("left", "6px");
                        }
                    });

                }

            });

        })();
        //购物车弹出框关闭
        (function(){
            $(".closewindow").on("click", function(){
                $(".cart-added").hide();
            });
            $(".btn_continue").on("click", function(){
                $(".cart-added").hide();
            });
        })();
        //清空浏览记录
        
        $(".clear").on("click",function(){
            var str="<div style='width:100px; height:50px; line-height:50px; color:red; margin:0 auto; text-align:center;'>已清空</div>"
            $(".recently-item").html(str);
            $.removeCookie("browser");
        });

        //加入购物车
        //cookie ajax
        //显示 成功框
        $(".add-cart").on("click", function(){
            var action = window.location.href;
            var actionid = action.split("?")[1].split("=")[1];
            var user = $.getCookie("userinfo");
            console.log(user);
            if(user != ""){
                $.ajax({
                    url : "./../server/addcart.php",
                    type : "post",
                    data : {
                        "username" : user,
                        "goodsid" : actionid,
                        "cartnum" : $("#good-num").val()
                    },
                    dataType : "json",
                }).then(function(res){
                    console.log(res);
                    if(res.status == 1){
                        $.ajax({
                            url : "./../server/getcart.php",
                            type : "post",
                            data : {
                                "username" : user,
                            },
                            dataType : "json",
                        }).then(function(res){
                            console.log(res);
                            // console.log(res);
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
                            $(".success_hint .des em:nth-of-type(1)").html(arr.length);
                            var money = 0;
                            for(var i = 0; i < arr.length; i++){
                                money += parseInt(arr[i].cart_num * arr[i].goods_price);
                            }
                            $(".success_hint .des em:nth-of-type(2)").html(money);
                        });
                        //显示添加成功
                        $(".cart-added").show();
                    }
                });
            } else {
                var str = $.getCookie("usercart");
                var res = JSON.parse(str || "[]");
                var action = window.location.href;
                var actionid = action.split("?")[1].split("=")[1];
                var obj={
                    goods_id:actionid,
                    cart_num:String($("#good-num").val()),
                    goods_price:$(".feihuprice").html(),
                    goods_name:$(".goodname").html(),
                    goods_pic:$(".middleimg").attr("src")
                };
                res.push(obj);
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
                $(".success_hint .des em:nth-of-type(1)").html(arr.length);
                var money = 0;
                for(var i = 0; i < arr.length; i++){
                    money += parseInt(arr[i].cart_num * arr[i].goods_price);
                }
                $(".success_hint .des em:nth-of-type(2)").html(money);

                //显示添加成功
                $(".cart-added").show();
                $.setCookie("usercart",JSON.stringify(res));
            }
        });
        //收货地址切换和关闭
        $(".address-close").on("click", function(){
            $(".address-hide").hide();
            $(".address-top").css({
                "border" : "solid 1px #ddd",
            });
            $(".address-top").children("span").css({
                "background-position" : "-120px 0"
            });
        });
        $(".addressitem").children("a").on("click",function(){
            $(".addressmain").html($(this).html());
            $(".address-hide").hide();
            $(".address-top").css({
                "border" : "solid 1px #ddd",
            });
            $(".address-top").children("span").css({
                "background-position" : "-120px 0"
            });
        });
        $(".address-top").on("click", function(){
            $(".address-hide").css("display", "block");
            $(".address-top").css({
                "border" : "solid 1px #7B470E",
                "border-bottom" : "none",
            });
            $(".address-top").children("span").css({
                "background-position" : "-150px 0"
            });
        });
    })
})(jQuery);