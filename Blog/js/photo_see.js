var vhref=location.href;//获取链接
var queryString = vhref.substring(vhref.indexOf("?article_id=") + 1);//获取链接参数
var queryString2= vhref.substring(vhref.indexOf("=") + 1);//id
window.onload=function(){
	get_order();
	get_five();
	get_imgs();
	add_see();
	get_content();
	get_content2();
}
//获取本图片内容
function getWord(content,num){
			var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
			str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
			str=str.substr(0,num);//截取字段				
			return str;
		}
$(".get_good button").on('click',function(){
		var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
					$(".love_num").text(info[0]);
					alert("感谢你的表扬哦!^^");
				}
			}
			xhr.open('POST','../php/update_love_photo.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send('photo_id='+queryString2);
	});
function get_content(){
	var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
					console.log(info);
					var a=info.photo_imgs;
					var imgs=a.split("*");
					var img='';
					for(var i=0;i<imgs.length;i++){
						img+='<li><img onclick="show_big_img(event)" src="'+imgs[i]+'"></li>';
					}
					$("#img_lis ul").append(img);
					$(".some_icon").hide();
					$(".article_title").text(info.photo_title);
					$(".article_time").text(info.photo_date);
					$(".see_num").text(info.see_num);
					$(".small").html(getWord(info.photo_content,120)+"...");
					$(".love_num").text(info.love_num);
					$(".real_content").html(info.photo_content);
					document.title=info.photo_title;
				}
			}
			xhr.open('POST','../php/get_photo.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send('photo_id='+queryString2);
}
//增加浏览量
		function add_see(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					
				}
			}
			xhr.open('POST','../php/update_see_photo.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send('photo_id='+queryString2);
		}
$(".see_big_img").on('click',function(){
	$(".see_big_img").hide();
})
function show_big_img(e){
	$(".see_big_img").show();
	var url=e.target.src;
	var imgurl= url.substring(url.indexOf("myphoto/"));//获取链接参数
	var imgrelurl="../"+imgurl;
	$(".see_big_img div").html('<img src='+imgrelurl+' />');
}
//获取我的相册
//获取照片
function get_imgs(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			eval("var info="+xhr.responseText);
			var str="";
			for(var i=0;i<info.length;i++){
				var a=info[i].photo_imgs;
				var imgs=a.split("*");
				console.log(imgs[0]);
				str+='<li><a href="photo_see.html?content_id='+info[i].photo_id+'"><img src="'+imgs[0]+'"></a></li>';
			}
			$(".imgs").append(str);
		}
	}
	xhr.open('POST','../php/get_my_photo.php');
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send(null);
}
//最新文章开始
var some_let=document.getElementsByClassName("some_let")[0];
	var some_button=some_let.getElementsByTagName("li");
	var order_articles1=document.getElementsByClassName("order_articles1")[0];
	var new_articles1=document.getElementsByClassName("new_articles1")[0];
	for(var i=0;i<some_button.length;i++){
		some_button[i].index=i;
		some_button[i].onclick=function(){
			if(this.index==0){
				some_button[0].setAttribute('class','active');
				some_button[1].removeAttribute('class','active');
				order_articles1.style.display='block';
				new_articles1.style.display='none';
			}else{
				some_button[1].setAttribute('class','active');
				some_button[0].removeAttribute('class','active');
				order_articles1.style.display='none';
				new_articles1.style.display='block';
			}
		}
	}
//	最新文章结束
function getWord(content,num){
			var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
			str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
			str=str.substr(0,num);//截取字段				
			return str;
		}
		//点击排行
		function get_order(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
					var str='';
					for(var i=0;i<info.length;i++){
						str+='<li><a href="article.html??article_id='+info[i].article_id+'">'+info[i].article_title+'<a href="article.html"></li>';
					}
					
					$(".order_articles1 ul").append(str);
				}
			}
			xhr.open('POST','../php/order.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}
		//站长推荐
		function get_five(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
					var str='';
					for(var i=0;i<info.length;i++){
					str+='<li><a href="article.html?article_id='+info[i].article_id+'">'+info[i].article_title+'<a href="article.html"></li>';
					}
					$(".new_articles1 ul").append(str);
				}
			}
			xhr.open('POST','../php/index_let_know.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
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
	
	$("#username").on('blur',function(e){
if(e.target.value==''){
	
}else{
var url='../php/check_and_addcontent.php';
var data={"username":e.target.value,"check_type":'username'};
var success=function(response){
	if(response.msg=='fail'){
		$(".show_message").html('<span style="color:red">此用户名已经有人使用了哦</span>');
	}else{
		$(".show_message").html('<span style="color:blue">你起了个好名字哦^^</span>');
	}
}
$.post(url,data,success,'json');
}

})
	
//提交评论
$(".article_content button:last-child").on('click',function(){
	var content=$("#form1 #content").val();
	var username=$("#form1 #username").val();
	if(username==''){
		alert('请填写你的用户名');
		$(".show_message").html('<span style="color:red">请填写用户名</span>');
		$("#form1 #username").focus();
	}else if(content==''){
		alert('请填写你的评论内容');
		$("#form1 #content").focus();
	}else{
	var url='../php/check_photo_content.php';
	var data={"user_name":username,"content":content,"photo_id":queryString2};
	var success=function(response){
		if(response.msg=='fail'){
			alert('评论失败，请稍后再试');
		}else{
			var str='';
			str+='<div class="user_content clearfix">';
			str+='<img src="../artcile/2018072806300223.jpg" />';
			str+='<div class="clearfix">';
			str+='<span class="da">'+username+'</span>';
			str+='<span>'+response.data+'</span>';
			str+='<p>';	
			str+=content;
			str+='</p>';
			str+='</div>';
			str+='</div>';	
			$(".real_say").append(str);
			$("#form1 #content").val('');
			$("#form1 #username").val('');
		}
	}
	$.post(url,data,success,'json');
	}
})


//显示评论
function get_content2(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.responseText!=''){
				eval("var info="+xhr.responseText);
				str='';
				for(var i=0;i<info.length;i++){
					str+='<div class="user_content clearfix">';
					str+='<img src="../artcile/2018072806300223.jpg" />';
					str+='<div class="clearfix">';
					str+='<span class="da">'+info[i].user_name+'</span>';
					str+='<span>'+info[i].content_date+'</span>';
					str+='<p>';	
					str+=info[i].content;
					str+='</p>';
					str+='</div>';
					str+='</div>';	
				}
				$(".real_say").append(str);
			}
		}
	}
	xhr.open('POST','../php/get_photo_content.php');
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send('photo_id='+queryString2);
}

