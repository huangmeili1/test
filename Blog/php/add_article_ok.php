<?php
include("../conn/dataconnection.php");
@$article_title=$_POST['article_title'];
@$article_know=$_POST['article_know'];
@$article_type=$_POST['article_type'];
@$article_time=$_POST['article_time'];
@$small_artice=$_POST['small_artice'];
@$content=$_POST['content'];
@$author=$_POST['author'];
@$key=$_POST['keyword'];
@$article_small_title=$_POST['article_small_title'];
if($_FILES["article_img2"]["name"]==''){//大图
			if($_FILES["article_img"]["name"]==''){//小图
			@$sql=mysql_query("insert into article(article_title,article_small_title,article_img,article_content,article_keyword,article_time,article_type,articel_know,author,article_small,see_num,love_num) values('$article_title','$article_small_title','','$content','$key','$article_time','$article_type','$article_know','$author','$small_artice','0','0')");
		}else{
			@$img=$_FILES["article_img"]["name"];
			$data=date("Ymdhis").rand(999,2);
			@$type=explode(".", $img);
			@$imgtype=$type[1];
			$imgname=$data.'.'.$imgtype;
			move_uploaded_file($_FILES['article_img']['tmp_name'],'../artcile/'.$imgname);
			@$images='../artcile/'.$imgname;
			@$sql=mysql_query("insert into article(article_title,article_small_title,article_img,article_content,article_keyword,article_time,article_type,articel_know,author,article_small,see_num,love_num) values('$article_title','$article_small_title','$images','$content','$key','$article_time','$article_type','$article_know','$author','$small_artice','0','0')");
		}
}else{
//	artcile_big_img
	    	@$big_img=$_FILES["article_img2"]["name"];
			@$b_d=date("Ymdhis").rand(999,2);
			@$t=explode(".", $big_img);
			@$big_type=$t[1];
			@$big_bame=$b_d.".".$big_type;
			move_uploaded_file($_FILES["article_img2"]['tmp_name'],'../artcile_big_img/'.$big_bame);
			@$big_imgs='../artcile_big_img/'.$big_bame;
	
		if($_FILES["article_img"]["name"]==''){
			@$sql=mysql_query("insert into article(article_title,article_small_title,article_img,article_bigimg,article_content,article_keyword,article_time,article_type,articel_know,author,article_small,see_num,love_num) values('$article_title','$article_small_title','','$big_imgs','$content','$key','$article_time','$article_type','$article_know','$author','$small_artice','0','0')");
		}else{
			@$img=$_FILES["article_img"]["name"];
			$data=date("Ymdhis").rand(999,2);
			@$type=explode(".", $img);
			@$imgtype=$type[1];
			$imgname=$data.'.'.$imgtype;
			@$article_small_title=$_POST['article_small_title'];
			move_uploaded_file($_FILES['article_img']['tmp_name'],'../artcile/'.$imgname);
			@$images='../artcile/'.$imgname;
			@$sql=mysql_query("insert into article(article_title,article_small_title,article_img,article_bigimg,article_content,article_keyword,article_time,article_type,articel_know,author,article_small,see_num,love_num) values('$article_title','$article_small_title','$images','$big_imgs','$content','$key','$article_time','$article_type','$article_know','$author','$small_artice','0','0')");
		}


}
if($article_type=='慢生活'){
	echo '<script>alert("添加成功");window.location.href="../main/life.html";</script>';
}else{
	echo '<script>alert("添加成功");window.location.href="../main/stydy.html";</script>';
}

?>