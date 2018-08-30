<?php
include_once("../conn/dataconnection.php");
@$s=mysql_query("select * from photo limit 0,6");
$info=array();
while($content=mysql_fetch_array($s)){
	$info[]=$content;
}
echo json_encode($info);
?>