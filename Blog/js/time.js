	var silde=document.getElementsByClassName("silde")[0];
	silde.onclick=function(){
		var sildedown=document.getElementsByClassName("sildedown")[0];
		if(sildedown.style.display=='block'){
			sildedown.style.display='none';
			
		}else{
			sildedown.style.display='block';
		}
	}
	window.onload=function(){
		get_article();
		get_phototime();
	}
	//获取文章时间轴
	function get_article(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				eval("var info="+xhr.responseText);
//				console.log(info);
				for(var i=0;i<info.length;i++){
					var str='';
					str+='<li>';
					str+='<span>'+info[i].article_time+'</span>';
					str+='<i>';
					str+='<a href="article.html?article_id='+info[i].article_id+'">'+info[i].article_title+'</a>';
					str+='</i>';
					str+='</li>';
					$(".container ul").append(str);
				}
			}
		}
		xhr.open('POST','../php/get_time.php');
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send("type="+"article");
	}
	//获取图片时间轴
	//获取文章时间轴
	function get_phototime(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				eval("var info="+xhr.responseText);
//				console.log(info);
				for(var i=0;i<info.length;i++){
					var str='';
					str+='<li>';
					str+='<span>'+info[i].photo_date+'</span>';
					str+='<i>';
					str+='<a href="photo_see.html?photo_id='+info[i].photo_id+'">'+info[i].photo_title+'</a>';
					str+='</i>';
					str+='</li>';
					$(".photo ul").append(str);
				}
			}
		}
		xhr.open('POST','../php/get_time.php');
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send("type="+"photo");
	}
	console.log($(".buttons"););
	
