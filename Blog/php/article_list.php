<?php
include_once("../conn/dataconnection.php");
@$sql=mysql_query("select * from article");
@$sql_num=mysql_num_rows($sql);
@$articles=array();
while(@$article=mysql_fetch_array($sql)){
	@$articles[]=$article;
}
echo json_encode($articles);
?>