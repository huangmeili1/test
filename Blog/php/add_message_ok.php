<meta charset="utf-8" />
<?php
include_once("../conn/dataconnection.php");
@$name=$_POST['name'];
$img=$_FILES["myimg"]["name"];
@$mypass=$_POST['mypass'];
@$myemail=$_POST['myemail'];
@$address=$_POST['address'];
@$content=$_POST['content'];
$data=date("Ymdhis").rand(999,2);
@$type=explode(".", $img);
@$imgtype=$type[1];
$imgname=$data.'.'.$imgtype;
$occuption=$_POST['occuption'];
@$myhua=$_POST['myhua'];
move_uploaded_file($_FILES['myimg']['tmp_name'],'../personimg/'.$imgname);
@$images='../personimg/'.$imgname;
@$sql=mysql_query("insert into user(user_name,pass,email,address,Occupation,about,myimg,myhua) values('$name','$mypass','$myemail','$address','$occuption','$content','$images','$myhua')");
echo "添加成功";
?>