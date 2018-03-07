(function($){

    //我挑选的商品pop窗口
    $(function(){
        (function(){
            $(".cart-like-item").on("mouseenter", function(){
                $(this).addClass("cart-like-select").siblings("li").removeClass("cart-like-select");
            })
            $(".cart-like-item").on("mouseleave", function(){
                $(this).removeClass("cart-like-select");
            })
            $("#close-pop").on("click", function(){
                $(".cart-title-pop").hide();
            })
        })();
        //头部
        (function(){
            $(function(){
                var user = $.getCookie("userinfo");
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
            })
        })();

        //购物车数据获取 事件绑定
        (function(){
            var user = $.getCookie("userinfo");
            if(user != ""){
                $.ajax({
                    url : "./../server/getcart.php",
                    type : "post",
                    data : {
                        "username" : user,
                    },
                    dataType : "json",
                }).then(function(res){
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
                    for(var i = 0; i < arr.length; i++){
                        var str = `<tr>
                                <td>
                                    <label for="">
                                        <input type="checkbox" checked="checked" class="itemselect"/>
                                    </label>
                                </td>
                                <td class="col_img">
                                    <a href="javascript:void 0">
                                        <img src="${arr[i].goods_pic}" width="70" alt="">
                                    </a>
                                </td>
                                <td class="col_name">
                                    <a href="javascript:void 0">${arr[i].goods_name}</a>
                                </td>
                                <td class="col_num">
                                    <div>
                                        <input type="text" value="${arr[i].cart_num}" class="goods-num"/>
                                        <span class="jia">+</span>
                                        <span class="jian">-</span>
                                    </div>
                                </td>
                                <td class="col_price"><span>¥ <em>${arr[i].goods_price}</em></span></td>
                                <td class="col_total"><span>¥ <em>${arr[i].goods_price * arr[i].cart_num}</em></span></td>
                                <td class="col_op">
                                    <a href="javascript:void(0)" data-info="${arr[i].goods_id}" class="tr-delete">删除</a> |
                                    <a href="javascript:void 0">收藏</a>
                                </td>
                            </tr>`;
                        $(".tbody").html($(".tbody").html() + str);
                    }
                    //全选反选
                    (function(){
                        $(".allselect").on("click", function(){
                            var item = $(".itemselect");
                            for(var i = 0; i < item.length; i++){
                                $(item[i]).attr("checked", $(this).prop("checked"))
                            }
                        });
                        $(".itemselect").on("click", function(){
                            var count = $(".itemselect:checked").length;//选中的个数
                            var num = $(".itemselect:checkbox").length;//个数
                            $(".allselect").prop("checked", num == count);
                        });
                    })();

                    //计算总价
                    (function(){
                        var p_tbody = $(".tbody").children("tr");
                        var price_res = 0;
                        for(var i = 0; i < p_tbody.length; i++){
                            price_res += parseFloat($(p_tbody[i]).children(".col_total").children("span").children("em").html());
                        }
                        $(".count-res").children("span").children("em").html(price_res);
                    })();

                    //商品数量加减
                    (function(){
                        $(".jia").on("click", function(){
                            var num = parseInt($(this).siblings("input").val());
                            if(num < 99){
                                $(this).siblings("input").val(num + 1);
                                changenum($(this));
                            }

                        });
                        $(".jian").on("click", function(){
                            var num = parseInt($(this).siblings("input").val());
                            if(num >= 2){
                                $(this).siblings("input").val(num - 1);
                                changenum($(this));
                            }
                        });
                        $(".cart-empty").hide();
                    })();
                    //删除一件购物车商品
                    (function(){
                        $(".tr-delete").on("click", function(){
                            $(this).parent("td").parent("tr").remove();
                            if($(".tbody").children().length == 0){
                                $(".mycart-go").hide();
                                $(".count").hide();
                                $(".cart-table").hide();
                                $(".cart-empty").show();
                            }
                            var self = $(this);
                            var user = $.getCookie("userinfo");
                            $.ajax({
                                url : "./../server/deletecart.php",
                                type : "post",
                                data : {
                                    "username" : user,
                                    "goodsid" : $(self).attr("data-info")
                                },
                                dataType : "json"
                            }).then(function(res){
                                if(res.status == 1){
                                    console.log("删除一条成功!")
                                }
                            });
                        });
                    })();
                    //清空购物车
                    (function(){
                        $(".clearcart").on("click", function(){
                            $(".mycart-go").hide();
                            $(".count").hide();
                            $(".cart-table").hide();
                            $(".cart-empty").show();
                            var user = $.getCookie("userinfo");
                            $.ajax({
                                url : "./../server/deleteallcart.php",
                                type : "post",
                                data : {
                                    "username" : user,
                                },
                                dataType : "json"
                            }).then(function(res){
                                if(res.status == 1){
                                    console.log("删除全部成功!")
                                }
                            });
                        });
                    })();

                    //改变商品数量函数
                    function changenum(obj){
                        var num = parseFloat($(obj).siblings("input").val());
                        var price = parseFloat($(obj).parent("div").parent().siblings(".col_price").children("span").children("em").html());
                        $(obj).parent("div").parent().siblings(".col_total").children("span").children("em").html(num * price);
                        var tbody = $(".tbody").children("tr");
                        var res = 0;
                        for(var i = 0; i < tbody.length; i++){
                            res += parseFloat($(tbody[i]).children(".col_total").children("span").children("em").html());
                        }
                        $(".count-res").children("span").children("em").html(res);
                    }

                    if($(".tbody").children().length == 0){
                        $(".mycart-go").hide();
                        $(".count").hide();
                        $(".cart-table").hide();
                        $(".cart-empty").show();
                    }
                });
            } else {
                var strCookie = $.getCookie("usercart");
                var res = JSON.parse(strCookie || "[]");
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
                for(var i = 0; i < arr.length; i++){
                    var str = `<tr>
                                <td>
                                    <label for="">
                                        <input type="checkbox" checked="checked" class="itemselect"/>
                                    </label>
                                </td>
                                <td class="col_img">
                                    <a href="javascript:void 0">
                                        <img src="${arr[i].goods_pic}" width="70" alt="">
                                    </a>
                                </td>
                                <td class="col_name">
                                    <a href="javascript:void 0">${arr[i].goods_name}</a>
                                </td>
                                <td class="col_num">
                                    <div>
                                        <input type="text" value="${arr[i].cart_num}" class="goods-num"/>
                                        <span class="jia">+</span>
                                        <span class="jian">-</span>
                                    </div>
                                </td>
                                <td class="col_price"><span>¥ <em>${arr[i].goods_price}</em></span></td>
                                <td class="col_total"><span>¥ <em>${arr[i].goods_price * arr[i].cart_num}</em></span></td>
                                <td class="col_op">
                                    <a href="javascript:void(0)" data-info="${arr[i].goods_id}" class="tr-delete">删除</a> |
                                    <a href="javascript:void 0">收藏</a>
                                </td>
                            </tr>`;
                    $(".tbody").html($(".tbody").html() + str);
                }
                //全选反选
                (function(){
                    $(".allselect").on("click", function(){
                        var item = $(".itemselect");
                        for(var i = 0; i < item.length; i++){
                            $(item[i]).attr("checked", $(this).prop("checked"))
                        }
                    });
                    $(".itemselect").on("click", function(){
                        var count = $(".itemselect:checked").length;//选中的个数
                        var num = $(".itemselect:checkbox").length;//个数
                        $(".allselect").prop("checked", num == count);
                    });
                })();

                //计算总价
                (function(){
                    var p_tbody = $(".tbody").children("tr");
                    var price_res = 0;
                    for(var i = 0; i < p_tbody.length; i++){
                        price_res += parseFloat($(p_tbody[i]).children(".col_total").children("span").children("em").html());
                    }
                    $(".count-res").children("span").children("em").html(price_res);
                })();

                //商品数量加减
                (function(){
                    $(".jia").on("click", function(){
                        var num = parseInt($(this).siblings("input").val());
                        if(num < 99){
                            $(this).siblings("input").val(num + 1);
                            changenum($(this));
                        }

                    });
                    $(".jian").on("click", function(){
                        var num = parseInt($(this).siblings("input").val());
                        if(num >= 2){
                            $(this).siblings("input").val(num - 1);
                            changenum($(this));
                        }
                    });
                    $(".cart-empty").hide();
                })();
                //删除一件购物车商品
                (function(){
                    $(".tr-delete").on("click", function(){
                        $(this).parent("td").parent("tr").remove();
                        if($(".tbody").children().length == 0){
                            $(".mycart-go").hide();
                            $(".count").hide();
                            $(".cart-table").hide();
                            $(".cart-empty").show();
                        }
                        var strCookie=$.getCookie("usercart");
                        var objCookie=JSON.parse(strCookie||"[]");
                        for(var i=0; i<objCookie.length; i++){
                            if(objCookie[i].goods_id==$(this).attr("data-info")){
                                objCookie.splice(i,1);
                            }
                        }
                        $.setCookie("usercart",objCookie);
                    });
                })();
                //清空购物车
                (function(){
                    $(".clearcart").on("click", function(){
                        $(".mycart-go").hide();
                        $(".count").hide();
                        $(".cart-table").hide();
                        $(".cart-empty").show();
                        $.removeCookie("usercart");
                    });
                })();

                //改变商品数量函数
                function changenum(obj){
                    var num = parseFloat($(obj).siblings("input").val());
                    var price = parseFloat($(obj).parent("div").parent().siblings(".col_price").children("span").children("em").html());
                    $(obj).parent("div").parent().siblings(".col_total").children("span").children("em").html(num * price);
                    var tbody = $(".tbody").children("tr");
                    var res = 0;
                    for(var i = 0; i < tbody.length; i++){
                        res += parseFloat($(tbody[i]).children(".col_total").children("span").children("em").html());
                    }
                    $(".count-res").children("span").children("em").html(res);
                }
                if($(".tbody").children().length == 0){
                    $(".mycart-go").hide();
                    $(".count").hide();
                    $(".cart-table").hide();
                    $(".cart-empty").show();
                }
            }
        })();
    })
})(jQuery);