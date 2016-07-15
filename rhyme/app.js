$(document).ready(function(){
	$("#button").click(function(e){
		e.preventDefault();
		$(".name-result").text($("#user-name").val());
	});

	$("#button").click(function(e){
		e.preventDefault();
		$(".lamb").text($("#friend-name").val());

	});
	
	$("#lambpic").click(function(){
		$("#baa").fadeIn
	})

	$("#lil").hover(function(){
		$("#lil").animate({fontSize: "12px"}, 2000);
},
	function(){
		$("#lil").stop().animate({fontSize:"20px"});
	});

	$("#appear").click(function(){
		$("#school").fadeIn();
		});
	});	
