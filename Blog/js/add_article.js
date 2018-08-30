UE.getEditor('content',{initialFrameWidth:900,initialFrameHeight:200})
function show_my_img2(e){
	var img=e.files[0];
		var fr=new FileReader();
		if(img['type']!='image/jpeg'){
			alert("请选择正确的图片格式");
			$(this).val('');
		}else{
			fr.onload=function(){
				$(".add_big_img").html('<img width="150px" height="150px" src="'+fr.result+'">')
			}
		}
	  fr.readAsDataURL(img);
}
function show_bigimg(){
	var optins=$("#article_know").val();
	 switch(optins){
	 	case '一级推荐':
	 		$(".big_img").slideDown();
	 		$("#article_img2").attr('required','required');
	 		break;
	 	case '二级推荐':
	 		$(".big_img").hide();
	 		$("#article_img2").removeAttr('required');
	 		$("#article_img").attr('required','required');
	 		break;
	 	case '三级推荐':
	 		alert("你好1");
	 		break;
	 	case '五级推荐':
	 		alert("你好2");
	 		break;
	 	case '不推荐':
	 		alert(optins);
	 		break;
	 }
}
function show_my_img(e){
	var img=e.files[0];
		var fr=new FileReader();
		if(img['type']!='image/jpeg'){
			alert("请选择正确的图片格式");
			$(this).val('');
		}else{
			fr.onload=function(){
				$("#small_title").html('<img width="150px" height="150px" src="'+fr.result+'">')
			}
		}
		fr.readAsDataURL(img);
}
