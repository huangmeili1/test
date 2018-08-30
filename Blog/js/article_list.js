window.onload=function(){
	get_articel();
}
function get_articel(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			eval("var info="+xhr.responseText);
			console.log(info);
			var str='';
			for(var i=0;i<info.length;i++){
				str+='<tr>';
				str+='<td>'+info[i].article_title+'</td>';
				str+='<td>';	
				str+='<p class="show_ly_content">'+getWord(info[i].article_content,30)+'……</p>';	
				str+='</td>';
				str+='<td class="ly_time">'+info[i].article_type+'</td>';
				str+='<td class="ly_time">'+info[i].articel_know+'</td>';
				str+='<td class="ly_time">'+info[i].article_time+'</td>';
				str+='<Td><a onclick="del_article('+info[i].article_id+')" href="#">删除</a>&nbsp;&nbsp;&nbsp;<a onclick="see_article('+info[i].article_id+')" href="#">查看</a></Td>';	
				str+='</tr>';
			}
			$(".show_ly tbody").append(str);
		}
	}
	xhr.open("POST",'../php/article_list.php');
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send(null)
}
function getWord(content,num){
			var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
			str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
			str=str.substr(0,num);//截取字段				
			return str;
}
function del_article(article_id){
	var falg=confirm("你确定要删除此篇文章?");
	if(falg){
		var url="../php/del_article.php";
		var data={"article_id":article_id};
		var success=function(response){
			if(response.errno==1){
				alert('删除成功');
				location.reload();
			}else{
				alert('删除失败，请稍后再试');
			}
		}
		$.post(url,data,success,"json");
	}

}
function see_article(article_id){
	$(".show_some_ly").show(1000);
	var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
//					console.log(info);
					if(info.article_keyword!=''){
						var keyword1=info.article_keyword.replace(/，/g,",");
						var keyword=(keyword1).split(",");
						var ke='';
						for(var i=0;i<keyword.length;i++){
							ke+='<button class="icon">'+keyword[i]+'</button>';
						}
						$(".icon").append(ke);
					}else{
						$(".some_icon").hide();
					}
					$(".article_title").text(info.article_title);
					$(".author").text(info.author);
					$(".author_type").text(info.article_type);
					$(".article_time").text(info.article_time);
					$(".see_num").text(info.see_num);
					$(".love_num").text(info.love_num);
					if(info.article_small==''){
						$(".small").html(getWord(info.article_content,120)+"...");
					}else{
						$(".small").text(info.article_small);
					}
					$(".love_num").text(info.love_num);
					$(".real_content").html(info.article_content);
					var del='<a class="del" onclick="del_article('+info.article_id+')" href="#">删除</a>&nbsp;&nbsp;&nbsp;<a class="update" href="update_article.html?article_id='+info.article_id+'">修改</a>';
					$(".real_content").append(del);
				}
			}
			xhr.open('POST','../php/get_article.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send('article_id='+"article_id="+article_id);
}

$(".colse").on('click',function(){
	$(".show_some_ly").hide(1000);
})
