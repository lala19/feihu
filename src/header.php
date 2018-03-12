<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/lib/jquery-3.3.1.js"></script>
    <script src="js/lib/jquery-tools.js"></script>
    <script src="js/jquery-cookie-1.0.0.js"></script>
    <!--[if lte IE 9]>
        <script src="js/lib/html5shiv/html5shiv.js"></script>
        <![endif]-->
</head>
<body>
<!--header>top start-->
<div class="header_t">
    <div class="main">
        <div class="header_t_left">
            <?php
                session_start();
                if (!empty($_SESSION["userInfo"])) {
                    $row = $_SESSION["userInfo"];
                    $h=date('G');
                    if ($h<11){
                        $str="上午好";
                    }else if ($h<13){
                        $str="中午好";
                    }else if ($h<17){
                        $str="下午好";
                    }else{
                        $str="晚上好";
                    };
                    $str="亲爱的 <a href='javascript:void(0)'>" .$row. "</a> ".$str."！ <a href='javascript:void(0)' onclick='exit()' id='uexit'>退出</a>";
            print_r($str);
            }else{
            $str="<span>您好，欢迎来到飞虎乐购 <a href=\"login.html\">安全登录</a></span> <span> 还没加入我们？<a href=\"register.html\">免费注册</a></span>";
            print_r($str);
            }
            ?>
        </div>
        <div class="header_t_right">
            <ul class="header-t-right-item">
                <li class="account" id="account">
                    <a href="#">我的账户</a>
                    <b></b>
                    <ul class="account-hide">
                        <li>
                            <a href="index.html">账户首页</a>
                        </li>
                        <li>
                            <a href="#">我的收藏</a>
                        </li>
                        <li>
                            <a href="#">我的订单</a>
                        </li>
                    </ul>
                </li>
                <li class="navigation">
                    <a href="#">网站导航</a>
                    <b></b>
                    <ul class="navigation-hide">
                        <li>
                            <a href="#">帮助中心</a>
                        </li>
                        <li>
                            <a href="#">联系客服</a>
                        </li>
                        <li>
                            <a href="#">常见问题</a>
                        </li>
                    </ul>
                </li>
                <li class="collect">
                    <a href="#">加入收藏</a>
                </li>
                <li>400 883 6900</li>
            </ul>
        </div>
    </div>
</div>
<!--header>top end-->
</body>
</html>
<script src="js/header.js"></script>
<script>
    function exit(){
        $.removeCookie("userinfo");
        window.location.href = "exit.php";
    }
</script>