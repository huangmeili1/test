<?php
include_once("../conn/dataconnection.php");
@$article_id=$_POST['article_id'];
@$article_know=$_POST['article_know'];
@$article_title=$_POST['article_title'];
@$article_small_title=$_POST['article_small_title'];
@$article_img=$_FILES['article_img']['name'];
@$article_bigimg=$_FILES['article_bigimg']['name'];
@$article_keywrod=$_POST['keyword'];
@$article_type=$_POST['article_type'];
@$article_know=$_POST['article_know'];
@$author=$_POST['author'];
@$article_small=$_POST['small_artice'];
if($article_know=='一级推荐'){
	$b_d=date("Ymdhis").rand(999,2);
	$old_big_img=$_POST['old_big_img'];
	$article_img2=$_FILES['article_bigimg']['name'];
	if($article_img2!=''){//大图更新
		if($article_img!=''){//小图也更新
		$a_img=$_FILES['article_img']['name'];
		$t=explode(".", $a_img);
		$t2=explode(".", $article_img2);
		$big_type=$t[1];
		$big=$t2[1];
		$big_bame=$b_d.".".$big_type;
		$article_big_name=$b_d.".".$big;
		move_uploaded_file($_FILES['article_bigimg']['tmp_name'],'../artcile_big_img/'.$article_big_name);
		$rel_bigimg='../artcile_big_img/'.$article_big_name;
		move_uploaded_file($_FILES['article_img']['tmp_name'],'../article/'.$big_bame);
		$rel_article_img='../article/'.$big_bame;
		$sql=mysql_query("update article set article_title='$article_title',article_small_title='$article_small_title',article_img='$rel_article_img',article_bigimg='$rel_bigimg',article_keyword='$article_keywrod',article_type='$article_type',article_know='$article_know',author='$author',article_small='$article_small' where article_id='$article_id'");
		}else{//小图不更新
			$t2=explode(".", $article_img2);
			$big=$t2[1];
			$article_big_name=$b_d.".".$big;
			move_uploaded_file($_FILES['article_bigimg']['tmp_name'],'../artcile_big_img/'.$article_big_name);
			$rel_bigimg='../artcile_big_img/'.$article_big_name;
			$sql=mysql_query("update article set article_title='$article_title',article_small_title='$article_small_title',article_bigimg='$rel_bigimg',article_keyword='$article_keywrod',article_type='$article_type',articel_know='$article_know',author='$author',article_small='$article_small' where article_id='$article_id'");
		}
	}else{//大图不更新
		if($article_img==''){//小图也不更新
			echo "dsfsd";
			$sql=mysql_query("update article set article_title='$article_title',article_small_title='$article_small_title',article_keyword='$article_keywrod',article_type='$article_type',articel_know='$article_know',author='$author',article_small='$article_small' where article_id='$article_id'");
		}else{//小图更新
			$a_img=$_FILES['article_img']['name'];
			$t=explode(".", $a_img);
			$big_type=$t[1];
			$big_bame=$b_d.".".$big_type;
			move_uploaded_file($_FILES['article_img']['tmp_name'],'../article/'.$big_bame);
			$rel_article_img='../article/'.$big_bame;
			$sql=mysql_query("update article set article_title='$article_title',article_small_title='$article_small_title',article_img='$rel_article_img',article_keyword='$article_keywrod',article_type='$article_type',article_know='$article_know',author='$author',article_small='$article_small where article_id='$article_id''");
		}
	}
//	echo $old_big_img;
}else{
	if($article_img==''){//小图不更新
		$sql=mysql_query("update article set article_title='$article_title',article_small_title='$article_small_title',article_keyword='$article_keywrod',article_type='$article_type',articel_know='$article_know',author='$author',article_small='$article_small' where article_id='$article_id'");
	}else{
		$a_img=$_FILES['article_img']['name'];
		$b_d=date("Ymdhis").rand(999,2);
		$t=explode(".", $a_img);
		$big_type=$t[1];
		$big_bame=$b_d.".".$big_type;
		move_uploaded_file($_FILES['article_img']['tmp_name'],'../artcile/'.$big_bame);
		$rel_article_img='../artcile/'.$big_bame;
		$sql=mysql_query("update article set article_title='$article_title',article_small_title='$article_small_title',article_img='$rel_article_img',article_keyword='$article_keywrod',article_type='$article_type',articel_know='$article_know',author='$author',article_small='$article_small' where article_id='$article_id'");
	}
}
@$num=mysql_affected_rows();
		if($num>0){
			echo "<script>alert('更新成功');window.location.href='../main/article_ly.html';</script>";
		}
?>