$(document).ready(function($) {
	$(".hamburger").click(function(){
		$(".nav").slideToggle(200);
	});

	$(".exit").click(function() {
		$(".helpWrap").fadeOut(200)
	});

	$(".help").click(function(){
		$(".helpWrap").fadeIn(200)
	});

	$(".btn").click(function() {
		// Get the id of the button just clicked on
		var id = $(this).attr('id');

		// Make sure whatever button had the 'active' class (Which we use to style in CSS) doesn't have it anymore
		$(".btn").removeClass('active');
		// Add the active class to the button we've just clicked on
		$(this).addClass('active');

		// Fade out whatever image is currently visible
		$(".image").fadeOut(200);
		// Use the hash symbol to denote that we're selecting by an id, then use the id of the button we just clicked on plus the string '-img' to get the id of the matching image and fade that in
		$("#"+id+"-img").fadeIn(200);
	});
	
});