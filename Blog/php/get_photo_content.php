<?php
include_once("../conn/dataconnection.php");
@$photo=$_POST['photo_id'];
@$s=mysql_query("select * from content where photo_id='$photo'");
$info=array();
while($content=mysql_fetch_array($s)){
	$info[]=$content;
}
echo json_encode($info);
?>