<?php
include_once("../conn/dataconnection.php");
@$photo_id=$_POST['photo_id'];
@$sql=mysql_query("update photo set love_num=love_num+1 where photo_id='$photo_id'");
@$s=mysql_query("select love_num from photo where photo_id='$photo_id'");
@$love=mysql_fetch_array($s);
echo json_encode($love);
?>