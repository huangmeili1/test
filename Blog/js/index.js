//	banner start
		var b=0;
		var banner=document.getElementsByClassName("banner")[0];
		var banners=banner.getElementsByClassName("banner1");
		var nums=document.getElementsByClassName("nums")[0];
		var lis=nums.getElementsByTagName("li");
		window.onload=function(){
			get_one();
			get_second();
			get_three();
			get_five();
			get_message();
			get_order();
			get_new();
//			banners[0].style.zIndex='3';
//			banners[0].style.opacity='1';
//			setInterval("change()",5000);
		}
		function change(){
			if(b==banners.length-1){
				banners[0].style.zIndex='3';
				banners[0].style.opacity='1';
				lis[0].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				banners[b].style.zIndex='1';
				banners[b].style.opacity='0';
				b=0;
			}else{
//				console.log('我是'+banners.length);
//				console.log(b);
				lis[b+1].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				banners[b+1].style.zIndex='3';
				banners[b+1].style.opacity='1';
				banners[b].style.zIndex='1';
				banners[b].style.opacity='0';
				b++;
			}
		}
		function pre(){
			if(b==0){
				banners[lis.length-1].style.zIndex='3';
				banners[lis.length-1].style.opacity='1';
				banners[b].style.zIndex='1';
				banners[b].style.opacity='0';
				lis[lis.length-1].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				b=lis.length-1;
			}else{
				banners[b-1].style.zIndex='3';
				banners[b-1].style.opacity='1';
				banners[b].style.zIndex='0';
				banners[b].style.opacity='1';
				lis[b-1].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				b=b-1;
			}
		}
		function next(){
			if(b==lis.length-1){
				banners[0].style.zIndex='3';
				banners[0].style.opacity='1';
				banners[b].style.zIndex='1';
				banners[b].style.opacity='0';
				lis[0].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				b=0;
			}else{
				banners[b+1].style.zIndex='3';
				banners[b+1].style.opacity='1';
				banners[b].style.zIndex='0';
				banners[b].style.opacity='1';
				lis[b+1].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				b=b+1;
			}
		}
		for(var j=0;j<lis.length;j++){
			lis[j].index=j;
			lis[j].onclick=function(){
				var j=this.index;
				banners[b].style.zIndex='1';
				banners[b].style.opacity='0';
				banners[j].style.zIndex='3';
				banners[j].style.opacity='1';
				lis[j].setAttribute('class','nums_active');
				lis[b].removeAttribute('class','nums_active');
				b=j;
			}
		}
		banner.onmouseover=function(){
			var pre=document.getElementsByClassName("pre")[0].style.display='block';
			var pre=document.getElementsByClassName("next")[0].style.display='block';
		}
		banner.onmouseleave=function(){
			var pre=document.getElementsByClassName("pre")[0].style.display='none';
			var pre=document.getElementsByClassName("next")[0].style.display='none';
		}
		//banner end
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
	
	var silde=document.getElementsByClassName("silde")[0];
	silde.onclick=function(){
		var sildedown=document.getElementsByClassName("sildedown")[0];
		if(sildedown.style.display=='block'){
			sildedown.style.display='none';
			
		}else{
			sildedown.style.display='block';
		}
	}
	function get_one(){
			var banner=document.getElementsByClassName("banner")[0];
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
//					var str='';
//					console.log(info);
					var nums='';
					var str='';
					for(var i=0;i<info.length;i++){
						if(i==0){
							nums+='<li class="nums_active"></li>';
						}else{
							nums+='<li></li>';
						}
						str+='<div class="banner1">';
						str+='<a href="article.html?article_id='+info[i].article_id+'"><img src="'+info[i].article_bigimg+'" /></a>';
						str+='<div class="article_title"><a href="article.html">';
						str+=info[i].article_title;
						str+='</a></div>';	
						str+='</div>';
						
					}
					$(".banner").append(str);
					$(".banner ul").append(nums)
//					console.log($(".banner .banner1").length);
				}
				
			}
			xhr.open('POST','../php/index_one.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}
	

function get_second(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
//					console.log(info);
					var str='';
					for(var i=0;i<info.length;i++){
						str+='<li>';
						str+='<a href="article.html"><img src="'+info[i].article_img+'"></a>';
						str+='<a href="article.html"><div class="show"></div></a>';
						str+='<div class="show_title"><a href="article.html">';
						str+=info[i].article_title."uyiruyor";
						str+='</a></div>';
						str+='<div class="buttons">';
						str+='<a href="article.html"><button>'+info[i].article_type+'</button></a>';	
						str+='</div>';
						str+='</li>';
					}
					$(".second ul").append(str);
				}
			}
			xhr.open('POST','../php/index_two.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}

function get_three(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
//					console.log(info);
					var str='';
					for(var i=0;i<info.length;i++){
						str+='<li>';
						str+='<a href="article.html">';
						str+='<img src="'+info[i].article_img+'" />';
						str+='</a>';
						str+='<div class="small_say">';
						str+=info[i].article_title;
						str+='</div>';
						str+='</li>';
					}
					$(".three ul").append(str);
//					console.log($('.three ul li').length);
//					console.log(info.length);
				}
			}
			xhr.open('POST','../php/index_three.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}

function get_five(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
//					console.log(info);
					var str='';
					for(var i=0;i<info.length;i++){
					str+='<div class="article clearfix">';
					str+='<a href="article.html">';
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
					$(".main_content").append(str);
				}
			}
			xhr.open('POST','../php/index_let_know.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}
function getWord(content,num){
			var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
			str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
			str=str.substr(0,num);//截取字段				
			return str;
		}

function get_message(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var message="+xhr.responseText);
//					console.log(message);
					var str='';
					str+='<ul class="clearfix"><i><img src="'+message.myimg+'" /></i><p><b>'+message.user_name+',</b>'+getWord(message.about,70)+"..."+'"</p></ul>';
					$(".aboutme").append(str);
				}
			}
			xhr.open('get','../php/user_message.php');
			xhr.send(null);
		}

function get_order(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					eval("var info="+xhr.responseText);
					var str='';
					for(var i=0;i<info.length;i++){
						str+='<li><a href="article.html">'+info[i].article_title+'<a href="article.html"></li>';
					}
					
					$(".order_articles1 ul").append(str);
				}
			}
			xhr.open('POST','../php/order.php');
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
			xhr.send(null);
		}

function get_new(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			eval("var info="+xhr.responseText);
			var str='';
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
