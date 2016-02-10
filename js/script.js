$(document).on("scroll",function(){
	var wScroll = $(this).scrollTop();
	console.log(wScroll);
	$(".logo").css({
		"transform":"translate(0,"+wScroll/2+"%)"
	});
	$(".bird").css({
		"transform":"translate(0,-"+wScroll/30+"%)"
	});
});