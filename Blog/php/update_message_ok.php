<?php
include_once("../conn/dataconnection.php");
@$name=$_POST['name'];
@$img=$_FILES["myimg"]["name"];
@$mypass=$_POST['mypass'];
@$myemail=$_POST['myemail'];
@$address=$_POST['address'];
@$content=$_POST['content'];
$occuption=$_POST['occuption'];
@$myhua=$_POST['myhua'];
@$user_id=$_POST['user_id'];
if($img!=''){
$data=date("Ymdhis").rand(999,2);
@$type=explode(".", $img);
@$imgtype=$type[1];
$imgname=$data.'.'.$imgtype;
move_uploaded_file($_FILES['myimg']['tmp_name'],'../personimg/'.$imgname);
@$images='../personimg/'.$imgname;
$sql=mysql_query("update user set user_name='$name',pass='$mypass',email='$myemail',address='$address',Occupation='$occuption',about='$content',myimg='$imgname',myhua='$myhua' where user_id='$user_id'");
}else{
$sql=mysql_query("update user set user_name='$name',pass='$mypass',email='$myemail',address='$address',Occupation='$occuption',about='$content',myhua='$myhua' where user_id='$user_id'");	
}
?>