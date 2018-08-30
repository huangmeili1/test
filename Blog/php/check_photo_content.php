<?php
	include_once("../conn/dataconnection.php");
	@$data=date("Y-m-d");
	@$content=$_POST['content'];
	@$user_name=$_POST['user_name'];
	@$photo_id=$_POST['photo_id'];
	@$sql=mysql_query("insert into content(photo_id,content,content_date,user_name) values('$photo_id','$content','$data','$user_name')");
	@$n=mysql_affected_rows();
	if($n>0){
		$result=array(
		"msg"=>'success',
		'data'=>$data
		);
		
	}else{
		$result=array(
		"msg"=>'fail',
		'data'=>$data
		);
	}
	echo json_encode($result);
?>