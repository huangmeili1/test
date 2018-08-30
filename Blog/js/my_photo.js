window.onload=function(){
	get_imgs();
}
function getWord(content,num){
		var str=content.replace(/<[^>]+>/g,"");//将html格式去掉	
		str=str.replace(/(^\s*)|(\s*$)/g, "");//删除空格				
		str=str.substr(0,num);//截取字段				
		return str;
}
//获取照片
function get_imgs(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			eval("var info="+xhr.responseText);
			var j=1;
			for(var i=0;i<info.length;i++){
				var a=info[i].photo_imgs;
				var imgs=a.split("*");
				console.log(imgs[0]);
				var str='<li><a href="photo_see.html?photo_id='+info[i].photo_id+'"><img src="'+imgs[0]+'" /></a>';
				str+='<h4>'+info[i].photo_title+'</h4><div class="line"></div>';
				str+='<p>'+getWord(info[i].photo_content,40)+'</p></li>';	
				$(".container .ul"+j).append(str);
				if(j==4){
					j=1;
				}else{
					j++;
				}
				
			}
		}
	}
	xhr.open('POST','../php/get_my_photo.php');
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