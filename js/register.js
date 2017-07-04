$(function(){
	var eyeFlag = false;	
	$(".eye").click(function(){
		if(eyeFlag){
			$("#pwd").attr("type","password");
			$("#repwd").attr("type","password");
			$(".eye i:eq(1)").css("display","none");
			$(".eye i:eq(0)").css("display","block");
			eyeFlag = false;
			return;
		}
		$("#pwd").attr("type","text");
		$("#repwd").attr("type","text");

		$(".eye i:eq(1)").css("display","block");
		$(".eye i:eq(0)").css("display","none");
		eyeFlag = true;
	}).css("cursor","pointer");
});

$("#frm").validate({
	errorPlacement:function(error,element){
		$(element).next().html(error);
		setInputCSS($(element),false);
	},
	success:function(form,element){
		setInputCSS($(element),true);
	},
	rules:{
		phone:{
			required:true,
			regexp:/^1\d{10}$/,
		},
		code:{
			required:true,
		},
		pwd:{
			required:true,
			rangelength:[6,10],
		},
		repwd:{
			required:true,
			equalTo:"#pwd",
		},
	},
	messages:{
		phone:{
			required:"手机号码为必填项",
		},
		code:{
			required:"验证码为必填项",
		},
		pwd:{
			required:"登录密码必须填写",
			rangelength:"密码必须在{0}-{1}位之间",
		},
		repwd:{
			required:"确认秘密必须填写",
			equalTo:"两次密码输入不一致",
		},
	},
	submitHandler:function(){
		var username = $("input:eq(0)").val();
		var pwd = $("input:eq(2)").val();
		if(localStorage.getItem(username)){
			alert("用户已经存在");
			resetForm();
			clearerror();
			return;
		}
		localStorage.setItem(username,pwd);
		document.getElementsByTagName("form")[0].submit();
	},
});
$.validator.addMethod("regexp",function(value,element,params){
	return params.test(value);
},"手机号码不合法");

$(".submitbtn").css("cursor","pointer").click(function(){
	$("form:eq(0)").submit();
});
$(".tologin").css("cursor","pointer");
$(".tologin").click(function(){
	window.location = "index.html";
});