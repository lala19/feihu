<?php
/**
 * Created by PhpStorm.
 * User: chelsea
 * Date: 2018/2/20
 * Time: 16:19
 */

header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

$userName = $_REQUEST["username"];
$conn = new mysqli("127.0.0.1", "root", "", "feihu");
mysqli_query($conn, "set names utf8");
$sql = "SELECT*FROM userinfo WHERE u_username='" . $userName . "'";
$result = $conn->query($sql);
if ($result->num_rows >= 1) {
    print_r("false");
} else {
    print_r("true");
}
$conn->close();