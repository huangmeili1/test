<?php
include_once("../conn/dataconnection.php");
@$sql=mysql_query("select * from article where articel_know='三级推荐' order by article_time desc");
$info=array();
while(@$f=mysql_fetch_array($sql)){
	$info[]=$f;
}
echo json_encode($info);
?>