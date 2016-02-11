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
	$(".tree").css({
		"transform":"translate(0,-"+wScroll/40+"%)"
	});
	showImage(wScroll);

	if(wScroll > $(".promo").offset().top - $(window).height()){
		var opacity = (wScroll - $(".promo").offset().top + $(window).height()) / $(window).height();
		$(".promo").css({"opacity":opacity});
	}

	if(wScroll > $(".blogs").offset().top - $(window).height()){
		var offset = wScroll - $(".blogs").offset().top + $(window).height() / 3;
		$(".blog-1").css({
			"transform": "translate("+ Math.min(0,offset) + "px," + -Math.min(0,offset)/2 + "px)" 
		});
		$(".blog-3").css({
			"transform": "translate("+ -Math.min(0,offset) + "px," + -Math.min(0,offset)/2 + "px)" 
		});
	}
});

$(document).ready(function(){
	showImage(wScroll);
});