<?php
include_once("../conn/dataconnection.php");
@$article_id=$_POST['article_id'];
@$sql=mysql_query("delete from article where article_id='$article_id'");
@$num=mysql_affected_rows();
if($num>0){
	$array=array(
		"errno"=>1,
		"msg"=>'success',
		"data"=>true
	);
}else{
	$array=array(
		"errno"=>0,
		"msg"=>'fail',
		"data"=>false
	);
}
echo json_encode($array);
?>