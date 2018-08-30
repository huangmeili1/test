<?php
include_once("../conn/dataconnection.php");
@$sql=mysql_query("select * from article order by love_num desc limit 0,10");
$info=array();
while(@$f=mysql_fetch_array($sql)){
	$info[]=$f;
}
echo json_encode($info);
?>