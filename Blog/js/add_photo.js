
var f=1;
function show_my_img(e){
		var img=e.files[0];
		console.log(img);
		var fr=new FileReader();
		console.log(fr);
		if(img['type']!='image/jpeg'){
			alert("请选择正确的图片格式");
			$(this).val('');
			$(".myimgshow").hide();
		}else{
			fr.onload=function(){
				$(".show_img"+f).html('<img style="width:100%;height:100%" src='+fr.result+' />');
				f++;
				str='';
				str+='<label for="img'+f+'">';
				str+='<div class="show_img'+f+' one_to">';
				str+='+';
				str+='</div>';
				str+='</label>';
				str+='<input type="file" onchange="show_my_img(this)" id="img'+f+'" class="img" name="img[]">';
				$(".show_all_img").append(str);
			}
		}
		fr.readAsDataURL(img);
	}
//var silde=document.getElementsByClassName("silde")[0];
//	silde.onclick=function(){
//		var sildedown=document.getElementsByClassName("sildedown")[0];
//		if(sildedown.style.display=='block'){
//			sildedown.style.display='none';
//			
//		}else{
//			sildedown.style.display='block';
//		}
//	}