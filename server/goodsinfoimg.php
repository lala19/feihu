<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/5
 * Time: 14:41
 */


header("Content-type:JSON;charset=utf-8");
header("Access-Control-Allow-Origin:*");

$goods_id=$_REQUEST["goodsid"];
$conn=new mysqli("127.0.0.1","root","","feihu");
mysqli_query($conn,"set names utf8");
$sql="SELECT goods_imgs
FROM goodsinfo
WHERE goods_id='".$goods_id."'";
$result=$conn->query($sql);
$row=array();
while($row=$result->fetch_assoc()){
    $rows[]=$row;
}
print_r(json_encode($rows));
$conn->close();