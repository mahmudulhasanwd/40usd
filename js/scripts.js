(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});		
	});

})(jQuery);



$(".search-tigger").click(function (){
	$(".sm-search").show();
	$("body").addClass("overlay");
});

$(document).on("click", function (event) {
	if (!$(event.target).closest($(".sm-search ,.search-tigger")).length) {
		$(".sm-search").hide();
		$("body").removeClass("overlay");
	}
});


let player = document.getElementById("babu");
new Sortable(player, {
	handle: '.fluent-drag',
	animation: 200
})

$(".hamburger1").click(function (){
	$(".custom-sidebar").animate({
		"left":"0"
	})
})

$(".menu-cross").click(function (){
	$(".custom-sidebar").animate({
		"left":"-100%"
	})
})

$(".hamburger2").click(function (){
	$(".ss-none").slideToggle();
})


$(".hamburger1").click(function (){
	$(".client-data-icon").addClass("overlayex");
});

$(".menu-cross").click(function (){
	$(".client-data-icon").removeClass("overlayex");
});

















