<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/28
 * Time: 14:43
 */


header("Content-type:JSON;charset=utf-8");
header("Access-Control-Allow-Origin:*");

$pic_name = $_REQUEST["pic"];
$conn = new mysqli("127.0.0.1", "root", "", "feihu");
mysqli_query($conn, "set names utf8");
$sql = "SELECT * FROM picinfo
WHERE pic_type='".$pic_name."'";
$result = $conn->query($sql);
$rows=array();
while($row=$result->fetch_assoc()){
    $rows[]=$row;
}
print_r(json_encode($rows));
$conn->close();