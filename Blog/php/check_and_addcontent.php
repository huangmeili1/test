<?php
include_once("../conn/dataconnection.php");
@$user_name=$_POST['username'];
@$check_type=$_POST['check_type'];
if($check_type=='username'){
	@$sql=mysql_query("select * from content where user_name='$user_name'");
	@$num=mysql_num_rows($sql);
	if($num>0){
		$result=array(
		"msg"=>'fail'
		);
	}else{
		$result=array(
		"msg"=>'success'
		);
	}
	echo json_encode($result);
}else{
	@$data=date("Y-m-d");
	@$content=$_POST['content'];
	@$user_name=$_POST['user_name'];
	@$article_id=$_POST['article_id'];
	@$sql=mysql_query("insert into content(article_id,content,content_date,user_name) values('$article_id','$content','$data','$user_name')");
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
}

?>