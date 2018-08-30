<?php
include_once("../conn/dataconnection.php");
@$ly_id=$_POST['ly_id'];
@$sql=mysql_query("delete from ly where ly_id='$ly_id'");
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