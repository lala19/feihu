<?php

header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST["username"];
    $goodsid=$_POST["goodsid"];
    $cartnum=$_POST["cartnum"];
    $dbIp = "127.0.0.1";
    $dbUser = "root";
    $dbPwd = "";
    $dbDatabase = "feihu";
    $conn = new mysqli($dbIp, $dbUser, $dbPwd, $dbDatabase);
    // 执行连接
    mysqli_query($conn, "set names utf8");
    $sql = "INSERT INTO cartinfo(u_username,goods_id,cart_num)
VALUES('".$username."','".$goodsid."','".$cartnum."');";
    // 执行sql
    $result = $conn->query($sql);
    $conn->close();
    $printArr = Array();
    if ($result == 1) {
        $printArr["status"] = 1;
        $printArr["msg"] = "添加成功";
        print_r(json_encode($printArr));
    } else {
        $printArr["status"] = 0;
        $printArr["msg"] = "添加失败";
        print_r(json_encode($printArr));
    }
}
