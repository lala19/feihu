(function ($) {
    $(function () {
        $("#myform").on('submit', function () {
            $.ajax({
                url: "http://127.0.0.1/FeiHu/server/register.php",
                data: {
                    username: $("#userName").val(),
                    userpwd: $("#userPwd").val(),
                    email: $("#userEmail").val()
                },
                dataType: "json",
                type: "post",
            }).done(function (res) {
                return false;
                if (res.status == '1') {
                    alert("注册成功");
                    window.location.href="login.html";
                    return false;
                } else {
                    alert("注册失败");
                }
                console.log(res);
            });
            return false;
        })


    })
})(jQuery);