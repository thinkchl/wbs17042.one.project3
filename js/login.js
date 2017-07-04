var eyeFlag = false;
var codeColors = ["white","blue","brown","red"];
var codeStr;
$(function(){
	initCode();
	$(".showcode").click(function(){
		initCode();
	}).css("cursor","pointer");
	$(".showcode").next().click(function(){
		initCode();
	}).css("cursor","pointer");

	$(".eye").click(function(){
		if(eyeFlag){
			$("#pwd").attr("type","password");
			$(".eye i:eq(1)").css("display","none");
			$(".eye i:eq(0)").css("display","block");
			eyeFlag = false;
			return;
		}
		$("#pwd").attr("type","text");
		$(".eye i:eq(1)").css("display","block");
		$(".eye i:eq(0)").css("display","none");
		eyeFlag = true;
	}).css("cursor","pointer");
});
$("form:eq(0)").validate({
	errorPlacement:function(error,element){
		$(element).next().html(error);
		resetForm();
	},
	rules:{
		phone:{
			required:true,
		},
		code:{
			required:true,
			// checkcode:true,
		},
	},
	messages:{
		phone:{
			required:"用户名为必填项",
		},
		code:{
			required:"验证码为必填项",
			// checkcode:"验证码错误",
		},
	},
	submitHandler:function(){
		var username = $("input:eq(0)").val();
		var pwd = $("input:eq(1)").val();
		console.log(pwd);
		console.log(localStorage.getItem(username));
		if(localStorage.getItem(username)==pwd){
			var code = $(".code input").val();
			console.log(code+codeStr);
			if(code.toLocaleUpperCase()!=codeStr.toLocaleUpperCase()){
				$(".code_error").html("验证码错误").css("color","red");
				initCode();
				return;
			}
			localStorage.setItem("userInfo",username);
			localStorage.setItem("login","true");
			window.location = "project3.html";
		}else{
			alert("用户名或密码错误");
			resetForm();
			initCode();
		}
	},
});

$.validator.addMethod("regexp",function(value,element,params){
	return params.test(value);
},"用户名不合法");
$.validator.addMethod("checkcode",function(value,element,params){
	if(params){
		return value.toLocaleUpperCase()==codeStr.toLocaleUpperCase();
	}
	return true;
});
$(".register").click(function(){
	window.location = "register.html";
}).css("cursor","pointer");
$(".loginbtn").click(function(){
	$("form:eq(0)").submit();
});





