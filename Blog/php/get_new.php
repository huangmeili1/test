<?php
include_once("../conn/dataconnection.php");
@$sql=mysql_query("select * from article order by article_time desc limit 0,8");
$info=array();
while(@$f=mysql_fetch_array($sql)){
	$info[]=$f;
}
echo json_encode($info);
?>