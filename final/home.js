$(document).ready(function(){
	var windowsize = $(window).width();
	if (windowsize > 640) {
		$("#blue").hover(function(){
			$("#blue").animate({height: "190px", width: "190px"}, 'fast');
			$("#myname").text("Maria Sodano", 'slow');
			$("nav").show('slow');
			});
	}else{
		$("nav").show(); }
});