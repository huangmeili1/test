<?php
include_once("../conn/dataconnection.php");
@$sql=mysql_query("select * from user");
@$sql_num=mysql_num_rows($sql);
if($sql_num>0){
	$mymessage=mysql_fetch_array($sql);
	echo json_encode($mymessage);
}
?>