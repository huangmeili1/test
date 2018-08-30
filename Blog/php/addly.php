<?php
include_once("../conn/dataconnection.php");
@$content=$_POST['a'];
@$ly_name=$_POST['user_name'];
@$ly_email=$_POST['email'];
@$ly_date=date("Y-m-d");
$sql=mysql_query("insert into ly(ly_name,ly_email,ly_content,ly_date) values('$ly_name','$ly_email','$content','$ly_date')");
@$num=mysql_affected_rows();
if($num>0){
	$result='success';
}else{
	$result='fail';
}
echo json_encode($result);
?>