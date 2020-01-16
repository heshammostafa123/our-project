$(document).ready(function() {
	$(".my-tabs li").click(function(){
		$(this).removeClass("inactive").siblings().addClass("inactive");
		$(".tabs div").hide();
		$('.'+$(this).attr("data-class")).fadeIn('500');
	});

	$(".navbar ul li").click(function(){
		$(this).addClass("active-link").siblings().removeClass(active-link);
	})
});