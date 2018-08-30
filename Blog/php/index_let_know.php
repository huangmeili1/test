<?php
include_once("../conn/dataconnection.php");
@$s=mysql_query("select * from article where articel_know='五级推荐' order by article_time desc");
@$total=mysql_num_rows($s);
@$per=5;
if(isset($_GET['page'])){
	$page=$_GET['page'];
}else{
	$page=1;
}
$number=ceil($total/$per);
$num=($page-1)*$per;
$pages=array();
for($i=1;$i<=$number;$i++){
	$pages[]=$i;
}
$numss=($page-1)*$per;
@$sql=mysql_query("select * from article where articel_know='五级推荐' order by article_time desc limit $numss,$per");
$info=array();
while(@$f=mysql_fetch_array($sql)){
	$info[]=$f;
}
$info[]=$page;
$info[]=$number;
$info[]=$pages;
echo json_encode($info);
?>