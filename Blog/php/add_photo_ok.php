<?php
include_once("../conn/dataconnection.php");
$image=$_FILES["img"]["name"];
$content=$_POST['content'];
$title=$_POST['title'];
$i=-1;
foreach($image as $a){
			$i=$i+1;
			$aa=explode(".", $a);
			@$aaa=$aa[1];
			$d=date("Ymd").rand(2,4000);
			$r1=$d.".".$aaa;
			$pp[$i]=$r1;
		}
		$pn=-1;
		for($n=0;$n<count($image);$n++){
			if($image==''){
				
			}else{
			$pn=$pn+1;
			if($_FILES['img']["tmp_name"][$n]==''){
				
			}else{
			move_uploaded_file($_FILES['img']["tmp_name"][$n],"../myphoto/".$pp[$n]);
			$images[$pn]="../myphoto/".$pp[$n];		
			}
			
			}
		}
		@$stra=implode("*",$images);
		$data=date("Y-m-d");
		$sql=mysql_query("insert into photo(photo_title,photo_content,photo_imgs,photo_date,see_num,love_num) values('$title','$content','$stra','$data','0','0')");
		$n=mysql_affected_rows();
		if($n>0){
				echo "<script>alert('添加成功');window.location.href='../main/my_photo.html';</script>";
		}else{
				echo "<script>alert('添加失败');history.go(-1);</script>";
		}
?>