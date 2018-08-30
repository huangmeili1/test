window.onload=function(){
	get_order();
	get_message();
	get_order();
	get_new();
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

//点击切换
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