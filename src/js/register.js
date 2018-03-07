(function($){
    $(function(){
        $("input").blur(function(){
            $(this).removeClass("bd-blue");
        });
        $("input").focus(function(){
            $(this).addClass("bd-blue");
        });
        $.idcode.setCode();   //加载生成验证码方法
        $(function(){
            $("#myform").validate({
                rules : {
                    userName : {
                        required : true,
                        rangelength : [5, 18],
                        remote : "./../server/username.php"
                    },
                    userPwd : {
                        rangelength : [5, 18]
                    },
                    userPwdrep : {
                        required : true,
                        equalTo : "#userPwd"
                    },
                    userEmail : {
                        required : true,
                        email : true
                    }
                },
                messages : {
                    userName : {
                        required : "用户名必填",
                        rangelength : "用户名长度是5-18",
                        remote : "该用户名已存在"
                    },
                    userPwd : {
                        rangelength : "密码长度是5-18",
                    },
                    userPwdrep : {
                        equalTo : "2次密码不一致"
                    },
                    userEmail : {
                        required : "邮箱必填",
                        email : "邮箱格式不正确"
                    },
                },
                submitHandler : function(){
                    var IsBy = $.idcode.validateCode(); //调用返回值，返回值结果为true或者false
                    if(IsBy){
                        $("#codetxt").html("");
                        $.ajax({
                            url : "./../server/register.php",
                            type : "post",
                            data : {
                                username : $("#userName").val(),
                                userpwd : $("#userPwd").val(),
                                email : $("#userEmail").val()
                            },
                            dataType : "json",
                        }).then(function(res){
                            if(res.status == 1){
                                alert("注册成功");
                                window.location.href = "login.html";
                                return false;
                            } else {
                                alert("注册失败");
                            }
                        });
                        return false;
                    } else {
                        $("#codetxt").html("验证码有误");
                        return false;
                    }
                    return false;
                }
            })

        })


    })
})(jQuery);