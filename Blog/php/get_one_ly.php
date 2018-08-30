<?php
@$ly_id=$_POST['ly_id'];
include_once("../conn/dataconnection.php");
@$s=mysql_query("select * from ly where ly_id='$ly_id'");
$info=array();
$content=mysql_fetch_array($s);
	$info[]=$content;
echo json_encode($info);
