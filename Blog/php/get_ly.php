<?php
include_once("../conn/dataconnection.php");
@$s=mysql_query("select * from ly");
$info=array();
while($content=mysql_fetch_array($s)){
	$info[]=$content;
}
echo json_encode($info);
