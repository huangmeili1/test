<?php
include_once("../conn/dataconnection.php");
@$type=$_POST['type'];
if($type=='article'){
@$sql=mysql_query("select article_id,article_title,article_time from article order by article_time desc");
@$articles=array();
while($article=mysql_fetch_array($sql)){
	@$articles[]=$article;
}
echo json_encode($articles);
}else{
$sql=mysql_query("select photo_id,photo_title,photo_date from photo order by photo_date desc");
@$articles=array();
while($article=mysql_fetch_array($sql)){
	@$articles[]=$article;
}
echo json_encode($articles);
}

?>