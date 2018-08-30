<?php
include_once("../conn/dataconnection.php");
@$article_id=$_POST['article_id'];
@$sql=mysql_query("update article set love_num=love_num+1 where $article_id");
@$s=mysql_query("select love_num from article where $article_id");
@$love=mysql_fetch_array($s);
echo json_encode($love);
?>