var ur=window.location.href;
var article_id=ur.substring(ur.indexOf("=")+1);
window.onload=function(){
	get_article();
}
function get_article(){
	var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
					console.log(info);
					$("#article_title").val(info.article_title);
					$("#article_small_title").val(info.article_small_title);
					$("#article_know").val(info.articel_know);
					$("#article_type").val(info.article_type);
					$("#small_title").html('<img width="150" height="150" src='+info.article_img+'>');
					if(info.article_img==''){
					}else{
						$("#article_img").val(info.article_img);
					}
					$(".small_artice").val(info.article_small);
					$("#keyword").val(info.article_keyword);
					$("#author").val(info.author);
				}
			}
			xhr.open('POST','../php/get_article.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send('article_id='+"article_id="+article_id);
}
