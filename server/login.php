<?php
/**
 * Created by PhpStorm.
 * User: chelsea
 * Date: 2018/2/20
 * Time: 17:07
 */


header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_REQUEST["username"];
    $userpwd = $_REQUEST["userpwd"];
    $conn = new mysqli("127.0.0.1", "root", "", "feihu");
    mysqli_query($conn, "set names utf8");
    $sql = "SELECT*FROM userinfo WHERE u_username='" . $username . "' AND u_userpwd='" . $userpwd . "'";
    $result = $conn->query($sql);
    $resultArr = Array();
    if ($result->num_rows == 1) {
        $resultArr["status"] = 1;
        $resultArr["msg"] = "登录成功";
        session_start();
        $_SESSION["userInfo"]=$username;
    } else {
        $resultArr["status"] = 0;
        $resultArr["msg"] = "登录失败";
    }
    print_r(json_encode($resultArr));
}

