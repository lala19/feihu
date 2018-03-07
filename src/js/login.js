(function($){
    $(function(){
        $("input").blur(function () {
            $(this).removeClass("bd-blue");
        });
        $("input").focus(function () {
            $(this).addClass("bd-blue");
        });
        $(function () {
            $("button").on("click", function () {
                $.ajax({
                    url: "./../server/login.php",
                    data: {
                        username:$("#userName").val(),
                        userpwd:$("#userPwd").val()
                    },
                    dataType: "json",
                    type: "post"
                }).done(function (res) {
                    if (res.status == 1) {
                        $.setCookie("userinfo",$("#userName").val());
                        var strCookie=$.getCookie("usercart");
                        var objCookie=JSON.parse(strCookie||"[]");
                        if(objCookie.length>0){
                            console.log(objCookie);
                            for(var i=0; i<objCookie.length; i++){
                                    $.ajax({
                                        url : "./../server/addcart.php",
                                        type : "post",
                                        data : {
                                            "username" : $("#userName").val(),
                                            "goodsid" : objCookie[i].goods_id,
                                            "cartnum" : objCookie[i].cart_num
                                        },
                                        dataType : "json",
                                    }).then(function(res){
                                        console.log(res);
                                        console.log("购物车添加成功");
                                        $.removeCookie("usercart");
                                    });
                            }
                        }
                        alert("登录成功!");
                        window.location.href = "index.html";
                        return false;
                    }else {
                        alert("用户名或密码错误");
                        return false;
                    }
                    return false;
                });
                return false;
            })
        })
    })
})(jQuery);