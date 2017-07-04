function resetForm(){
	document.getElementsByTagName("form")[0].reset();
	for(var i =0;i<$("input").length;i++){
		var obj = $("input:eq("+i+")");
		setInputCSS(obj);
	}
}
function setInputCSS(obj,flag){
	if(flag==true){
		var txt = "green";
		var bd = txt;
		var bg = "lightgreen";
		$(obj).next().html("OK");
	}else if(flag==false){
		var txt = "red";
		var bd = txt;
		var bg = "pink";
	}else{
		var txt = "black";
		var bd = "gray";
		var bg = "#e5e5e5";
	}
	$(obj).parent().css({
		border:"1px solid "+bd,
	});
	$(obj).next().css("color",txt);
	$(obj).prev().children().css("background",bg);
	$(obj).prev().children().children().css("color",txt);
}
function createCode(){
	var code ="";
	var num = Math.floor(Math.random()*62);
	if(num<10){
		code+=String.fromCharCode(num+48);
	}else if(num<36){
		code+=String.fromCharCode((num-10)+'a'.charCodeAt(0));
	}else{
		code+=String.fromCharCode((num-36)+'A'.charCodeAt(0));
	}
	return code;
}
function initCode(){
	codeStr = "";
	var codeSpans = $(".showcode span");
	for(var i = 0;i<codeSpans.length;i++){
		var str = createCode();
		codeStr+=str;
		$(codeSpans[i]).html(str).css("color",codeColors[i]);
	}
}
function clearerror(obj){
	var errors;
	if(obj)
		errors = obj;
	else
		errors = $(".register div[class*=_error]");
	for(var i = 0;i<errors.length;i++){
		$(errors[i]).html("");
	}
}
function changecss(obj,source ,index){
	if(obj){
		for(var i =0;i<obj.length;i++){
			if(source){
				if(source instanceof Array){
					var temp;
					if(index && !isNaN(index)){
						temp = source[index];
					}else{
						temp = source[0];
					}
				}else if(source instanceof Object){
					temp = source;
				}
				$(obj[i]).css(temp);
			}
		}
	}
}