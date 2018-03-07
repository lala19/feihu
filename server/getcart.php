<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/5
 * Time: 19:57
 */

header("Content-type:JSON;charset=utf-8");
header("Access-Control-Allow-Origin:*");

$username=$_REQUEST["username"];
$conn=new mysqli("127.0.0.1","root","","feihu");
mysqli_query($conn,"set names utf8");
$sql="SELECT * FROM cartinfo AS a
JOIN goodsinfo AS b
ON a.`goods_id`=b.`goods_id`
WHERE u_username='".$username."'";
$result=$conn->query($sql);
if ($result->num_rows<=0){
    print_r("false");
}else{
    $row=array();
    while($row=$result->fetch_assoc()){
        $rows[]=$row;
    }
    print_r(json_encode($rows));
}
$conn->close();