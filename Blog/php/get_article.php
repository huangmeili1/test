<?php
include_once("../conn/dataconnection.php");
@$article_id=$_POST['article_id'];
@$sql=mysql_query("select * from article where $article_id");
@$sql_num=mysql_num_rows($sql);
@$articles=array();
@$article=mysql_fetch_array($sql);
echo json_encode($article);
?>