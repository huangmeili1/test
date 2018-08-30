<?php
include_once("../conn/dataconnection.php");
@$photo_id=$_POST['photo_id'];
@$sql=mysql_query("update photo set see_num=see_num+1 where photo_id='$photo_id'");
?>