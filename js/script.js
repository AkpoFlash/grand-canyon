var wScroll = $(this).scrollTop();

function showImage(wScroll){
	if(wScroll > $(".tours-pics").offset().top - $(window).height() / 1.3){
		$(".tours-pics figure").each(function(i,elem){
			setTimeout(function(){
				$(".tours-pics figure").eq(i).addClass("is-show");
			}, 200 * (i + 1));
		});
	}
}

$(document).on("scroll",function(){
	wScroll = $(this).scrollTop();
	$(".logo").css({
		"transform":"translate(0,"+wScroll/2+"%)"
	});
	$(".bird").css({
		"transform":"translate(0,-"+wScroll/30+"%)"
	});
	showImage(wScroll);
});

$(document).ready(function(){
	showImage(wScroll);
});