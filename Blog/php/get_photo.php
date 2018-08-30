<?php
include_once("../conn/dataconnection.php");
@$photo_id=$_POST['photo_id'];
@$sql=mysql_query("select * from photo where photo_id='$photo_id'");
@$sql_num=mysql_num_rows($sql);
@$articles=array();
@$article=mysql_fetch_array($sql);
echo json_encode($article);
?>