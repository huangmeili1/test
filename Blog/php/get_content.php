<?php
include_once("../conn/dataconnection.php");
@$article_id=$_POST['article_id'];
@$s=mysql_query("select * from content where $article_id");
$info=array();
while($content=mysql_fetch_array($s)){
	$info[]=$content;
}
echo json_encode($info);
?>