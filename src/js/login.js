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
                    url: "http://127.0.0.1/feihu/server/login.php",
                    data: {
                        username:$("#userName").val(),
                        userpwd:$("#userPwd").val()
                    },
                    dataType: "json",
                    type: "post"
                }).done(function (res) {
                    if (res.status == 1) {
                        $.setCookie("userinfo",$("#userName").val());
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