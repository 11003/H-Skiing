$(document).ready(function(){
	var x = 0;
	$(".scroll_box a").css({ opacity:0.5}).siblings().eq(x+2).css({opacity:1})
	$(".next").click(function(){
		if(x<$(".scroll_box a").length-5){x=x+1;}else{x=$(".scroll_box").length-1}
		
		$(".scroll_box").stop().animate({marginLeft:-270*x},1000)
		$(".scroll_box a").css({ opacity:0.5}).siblings().eq(x+2).animate({opacity:1},1000)	
	})
	$(".prev").click(function(){
		if(x>0){x=x-1;}else{x=0}
		$(".scroll_box").stop().animate({marginLeft:-270*x},1000)
		$(".scroll_box a").css({ opacity:0.5}).siblings().eq(x+2).animate({opacity:1},1000)
	})
	
})// JavaScript Document