	$(".some_let ul li").on('click',function(){
	var index=$('.some_let ul li').index(this);
	$(this).addClass('active').siblings().removeClass('active');
	$('.some_articles div').eq(index).show().siblings().hide();
})
window.onload=function(){
	var reurl=window.location.hash;
	var m=reurl.match(/\d+/g);
	if (m&&m!=''){
		get_fives('../php/get_lift.php?page='+m);
	}else{
		get_fives('../php/get_lift.php');
	}
	get_new();
	get_order();
	get_five();
	get_imgs();
}
function get_new(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			eval("var info="+xhr.responseText);
			var str='';
//			console.log(info);
			for(var i=0;i<info.length;i++){
				str+='<li><a href="article.html">'+info[i].article_title+'</a></li>';
			}
			$(".new_articles1 ul").append(str);
		}
	}
	xhr.open('POST','../php/get_new.php');
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send(null);
}
//点击
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
//					console.log(info);
					var str='';
					for(var i=0;i<info.length;i++){
					str+='<li><a href="article.html?article_id='+info[i].article_id+'">'+info[i].article_title+'<a href="article.html"></li>';
					}
					$(".let_articles1 ul").append(str);
				}
			}
			xhr.open('POST','../php/index_let_know.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}
//获取照片
function get_imgs(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			eval("var info="+xhr.responseText);
			var str="";
			for(var i=0;i<6;i++){
				var a=info[i].photo_imgs;
				var imgs=a.split("*");
//				console.log(imgs[0]);
				str+='<li><a href="photo_see.html?content_id='+info[i].photo_id+'"><img src="'+imgs[0]+'"></a></li>';
			}
			$(".imgs").append(str);
		}
	}
	xhr.open('POST','../php/get_my_photo.php');
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send(null);
}
function get_fives(url){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
//					console.log(info);
					var str='';
					for(var i=0;i<info.length-3;i++){
					str+='<div class="article clearfix">';
					str+='<a href="article.html?article_id='+info[i].article_id+'">';
					str+='<h2>'+info[i].article_title+'</h2>';
					str+='<img src="'+info[i].article_img+'" />';
					str+='<div class="p">';
					str+='<p>';
					
					if(info[i].article_small==''){
					var article=info[i].article_content;
					str+=getWord(article,200)+"......";
					}else{
						str+=info[i].article_small;
					}	
					str+='</p>';
					str+='<ul class="icons">';
					str+='<li><span>凉意凉意凉意</span></li>';
					str+='<li>凉意</li>';			
					str+='<li>凉意</li>';		
					str+='<li>凉意</li>';			
					str+='</ul>';	
					str+='</div>';
					str+='</a>';
					str+='</div>';
					}
					$(".main_content").html(str);
					var page=info[info.length-3];
					var nextpage=parseInt(page)+1;
					var prepage=page-1;
					var pages=info[info.length-1];
//					console.log(pages);
					var b='<a class="pagesall" href="#">'+info[info.length-2]+'</a>';
					for(var i=0;i<pages.length;i++){
							b+='<a onclick="nextpage('+pages[i]+')" href="#">'+pages[i]+'</a>';
					}
					if(nextpage>info[info.length-2]){
						b+='<a style="color:gainsboro;" href="#">下一页</a>';
						b+='<a style="color:gainsboro;" href="#">尾页</a>';
					}else{
						b+='<a onclick="nextpage('+nextpage+')" href="#">下一页</a>';
						b+='<a onclick="nextpage('+info[info.length-2]+')" href="#">尾页</a>';
					}
					$('.pages').html(b);
					var pa=$('.pages a');
						for(var i=0;i<pa.length;i++){
						if(pa[i].textContent==page){
							$('.pages a').eq(i).addClass('active').siblings().removeClass('active');
						}
					}	
					
					//记录历史记录
					var state = {
					title: 'title',
					url: '#'+page
					}
					window.history.pushState && window.history.pushState(state, state.title, state.url);
				}
			}
			xhr.open('GET',url);
			xhr.send(null);
		}
//浏览器后退
window.onpopstate = function(){
var state = window.history.state;
if(state.url&&state.url!=''){
var a=state.url;
var history_m=a.match(/\d+/g);
get_fives('../php/get_lift.php?page='+history_m);
}

// 直接将值取出，或再次发个ajax请求
};


function getWord(content,num){
			var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
			str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
			str=str.substr(0,num);//截取字段				
			return str;
		}
//下一页
function nextpage(page){	
	get_fives('../php/get_lift.php?page='+page);
}
//下拉
var silde=document.getElementsByClassName("silde")[0];
	silde.onclick=function(){
		var sildedown=document.getElementsByClassName("sildedown")[0];
		if(sildedown.style.display=='block'){
			sildedown.style.display='none';
			
		}else{
			sildedown.style.display='block';
		}
	}