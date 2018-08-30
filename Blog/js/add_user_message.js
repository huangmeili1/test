window.onload=function(){
//	alert("wqvb");
get_message();
}
//获取用户的信息
function get_message(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.responseText==4){
			eval("var info="+xhr.responseText);
			console.log(info);
		}
	}
	xhr.open('POST','../php/user_message.php');
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send(null);
}
