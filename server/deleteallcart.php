<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/7
 * Time: 11:37
 */

header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST["username"];
    $dbIp = "127.0.0.1";
    $dbUser = "root";
    $dbPwd = "";
    $dbDatabase = "feihu";
    $conn = new mysqli($dbIp, $dbUser, $dbPwd, $dbDatabase);
    // 执行连接
    mysqli_query($conn, "set names utf8");
    $sql = "DELETE FROM cartinfo
WHERE u_username='".$username."'";
    // 执行sql
    $result = $conn->query($sql);
    $conn->close();
    $printArr = Array();
    if ($result == 1) {
        $printArr["status"] = 1;
        $printArr["msg"] = "删除成功";
        print_r(json_encode($printArr));
    } else {
        $printArr["status"] = 0;
        $printArr["msg"] = "删除失败";
        print_r(json_encode($printArr));
    }
}