	window.onload=function(){
		gete_ly();
	}
	//下拉列表
	var silde=document.getElementsByClassName("silde")[0];
	silde.onclick=function(){
		var sildedown=document.getElementsByClassName("sildedown")[0];
		if(sildedown.style.display=='block'){
			sildedown.style.display='none';
			
		}else{
			sildedown.style.display='block';
		}
	}
	function gete_ly(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				eval("var info="+xhr.responseText);
//				console.log(info);
				var str='';
				for(var i=0;i<info.length;i++){
					str+='<tr>';
					str+='<td>'+info[i].ly_name+'</td>';
					str+='<td class="ly_email">'+info[i].ly_email+'</td>';	
					str+='<td>';	
					str+='<p class="show_ly_content">'+getWord(info[i].ly_content,30)+'……</p>';	
					str+='</td>';		
					str+='<td class="ly_time">'+info[i].ly_date+'</td>';	
					str+='<Td><a onclick="del_ly('+info[i].ly_id+')" href="#">删除</a>&nbsp;&nbsp;&nbsp;<a onclick="see_ly('+info[i].ly_id+')" href="#">查看</a></Td>';	
					str+='</tr>';
				}
				$(".show_ly tbody").append(str);
			}
		}
		xhr.open('POST','../php/get_ly.php');
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send(null);
	}
function getWord(content,num){
			var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
			str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
			str=str.substr(0,num);//截取字段				
			return str;
}
function del_ly(ly_id){
	var falg=confirm("你确定要删除此条留言?");
	if(falg){
		var url="../php/del_ly.php";
		var data={"ly_id":ly_id};
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
function see_ly(ly_id){
	var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				eval("var info="+xhr.responseText);
				var str='';
				for(var i=0;i<info.length;i++){
					str+='<span>留言者：</span>';
					str+='<span>'+info[i].ly_name+'</span><br>';
					str+='<span>留言邮箱：</span>';
					str+='<span>'+info[i].ly_email+'</span>';
					str+='<br>';
					str+='<span>留言时间：</span>';
					str+='<span>'+info[i].ly_date+'</span>';
					str+='<br>';
					str+='<span>留言内容：</span>';
					str+='<p>'+info[i].ly_content+'</p>';
				}
				str+='<button onclick="del_ly('+info[0].ly_id+')">删除</button>';
				$(".show_one_ly div").html(str);
				$(".show_some_ly").show(1000);
			}
		}
		xhr.open('POST','../php/get_one_ly.php');
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send("ly_id="+ly_id);
}
$(".show_some_ly").on('click',function(){
	$(this).hide(1000);
})
