<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/28
 * Time: 16:43
 */

header("Content-type:JSON;charset=utf-8");
header("Access-Control-Allow-Origin:*");

$goods_type=$_REQUEST["type"];
$conn=new mysqli("127.0.0.1","root","","feihu");
mysqli_query($conn,"set names utf8");
$sql="SELECT goods_name,goods_price,goods_oldprice,goods_pic,goods_info
FROM goodsinfo
WHERE goods_type='".$goods_type."'";
$result=$conn->query($sql);
$row=array();
while($row=$result->fetch_assoc()){
    $rows[]=$row;
}
print_r(json_encode($rows));
$conn->close();