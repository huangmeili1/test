<?php
include_once("../conn/dataconnection.php");
@$article_id=$_POST['article_id'];
@$sql=mysql_query("update article set see_num=see_num+1 where $article_id");
?>