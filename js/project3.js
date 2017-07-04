$(function(){
	var loginFlag = localStorage.getItem("login");
	console.log(loginFlag);
	if(loginFlag=="true"){
		var loginuser = localStorage.getItem("userInfo");
		$(".top_content_right span").css("visibility","hidden");
		$(".top_content_right a:eq(0)").html(loginuser)[0].href="";
		$(".top_content_right a:eq(1)").html("退出登录").click(function(){
			localStorage.setItem("login","false");
			localStorage.setItem("userInfo","");
			$(".top_content_right span").css("visibility","visible");
			$(".top_content_right a:eq(0)").html("登录")[0].href="index.html";
			$(this).html("注册")[0].href="register.html";
			window.location = "index.html";
			return false;
		});
	}else{
		$(".top_content_right span").css("visibility","visible");
		$(".top_content_right a:eq(0)").html("登录")[0].href="index.html";
		$(".top_content_right a:eq(1)").html("注册")[0].href="register.html";
		window.location = "index.html";
	}
});

var slides = $(".swipercontent .swiper-slide");
for(var i = 1;i<slides.length;i++){
	$(slides[i]).css({
		"background":"url(images/"+(i+1)+".jpg)",
		"background-size":"cover",
		"height":"initial",
	});
}
$(".swiper-slide img:eq(0)").addClass("ani");
$(".swiper-slide img:eq(0)").attr({
    "swiper-animate-effect":"fadeInLeft",
    "swiper-animate-duration":"2s",
    "swiper-animate-delay":"0s"
});
$(".swiper-slide img:eq(1)").addClass("ani");
$(".swiper-slide img:eq(1)").attr({
    "swiper-animate-effect":"fadeInRight",
    "swiper-animate-duration":"2s",
    "swiper-animate-delay":"0s"
});
$(".swipertop .top").addClass("ani");
$(".swipertop .top").attr({
    "swiper-animate-effect":"fadeInDown",
    "swiper-animate-duration":"1s",
    "swiper-animate-delay":"0s"
});
for(var i = 0;i<4;i++){
	var obj = $(".swipertop .swiper-slide:eq(0)").clone();
	$(".swipertop .swiper-wrapper").append(obj);
}
var colors = [
	{
		"background":"white",
		"color":"black",
		"opacity":"1"
	},
	{
		"background":"#a38f69",
		"color":"white",
		"opacity":"0.7"
	},
	{
		"background":"#d5af65",
		"color":"white",
		"opacity":"0.7"
	},
	{
		"background":"#0e0d0c",
		"color":"white",
		"opacity":"0.7"
	},
	{
		"background":"#648fa8",
		"color":"white",
		"opacity":"0.7"
	},
];

var myswiper = new Swiper(".swipercontent",{
	pagination:".swiper-pagination",
	direction:"vertical",
	paginationClickable: true,
	mousewheelControl:true,
	paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
	onInit:function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
		changecss($(".top"),colors);
		$(".top").hide();
		$(".top").slideDown(1000,function(){
		});
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper);
		var index = swiper.activeIndex;
		changecss($(".top"),colors,index);
		if(index>0){
			$(".top_content_left p").html("&nbsp");
			changecss([$(".top_content_right a"),$(".top_content_right span")],{"color":"white"});
		}else{
			$(".top_content_left p").html("伟达金云桥");
			changecss([$(".top_content_right a"),$(".top_content_right span")],{"color":"red"});
		}
		$(".top").hide();
		$(".top").slideDown(1000);
	}
});
