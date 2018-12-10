$(function(){
	var objli = $(".box3nav ul");
	var objjulbox = $(".box3center");
	var num = 0;
//	objli.children("li").eq(num).css({"background": "#d6d6d6"});
	objjulbox.children("ul").eq(num).css("display","block");
	objli.children("li").mousemove(function(){
		num = $(this).index();
//	    objli.children("li").eq(num).css({"background":"#d6d6d6"});
		objli.children("li").eq(num).siblings().css("background","none").children("a").css("color","black");
		objjulbox.children("ul").eq(num).css("display","block").siblings().css("display","none");
	})
});
