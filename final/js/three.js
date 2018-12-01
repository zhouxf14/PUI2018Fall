$(document).ready(function() {
	var witch = 0;
	var desk = 0;

	$(window).resize(function(){
		location.reload()
	});
	
	var guideline_height = $(window).height() - $("nav").height();
  	$("#guideline").height(guideline_height);

	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});

	$("#witch").click(function() {
		if (witch == 0) {
			$(".showcase").css("background-image",'url("images/witch/1.jpg")');
		}
		if (witch == 1) {
			$(".showcase").css("background-image",'url("images/witch/2.jpg")');
		}
		if (witch == 2) {
			$(".showcase").css("background-image",'url("images/witch/3.jpg")');
		}
		if (witch == 3) {
			$(".showcase").css("background-image",'url("images/witch/4.jpg")');
		}
		if (witch == 4) {
			$(".showcase").css("background-image",'url("images/witch/5.jpg")');
		}
		if (witch == 5) {
			$(".showcase").css("background-image",'url("images/witch/6.jpg")');
		}
		if (witch == 6) {
			$(".showcase").css("background-image",'url("images/witch/7.jpg")');
		}
		if (witch == 7) {
			$(".showcase").css("background-image",'url("images/witch/8.jpg")');
		}
		if (witch == 8) {
			$(".showcase").css("background-image",'url("images/witch/9.jpg")');
		}
		if (witch == 9) {
			$(".showcase").css("background-image",'url("images/witch/10.jpg")');
		}
		if (witch == 10) {
			$(".showcase").css("background-image",'url("images/witch/11.jpg")');
		}
		if (witch == 11) {
			$(".showcase").css("background-image",'url("images/witch/0.jpg")');
		}

		witch = witch + 1;
	});

	$("#desk").click(function() {
		if (desk == 0) {
			$(".showcase2").css("background-image",'url("images/desk/1.jpg")');
		}
		if (desk == 1) {
			$(".showcase2").css("background-image",'url("images/desk/2.jpg")');
		}
		if (desk == 2) {
			$(".showcase2").css("background-image",'url("images/desk/3.jpg")');
		}
		if (desk == 3) {
			$(".showcase2").css("background-image",'url("images/desk/4.jpg")');
		}
		if (desk == 4) {
			$(".showcase2").css("background-image",'url("images/desk/5.jpg")');
		}
		if (desk == 5) {
			$(".showcase2").css("background-image",'url("images/desk/6.jpg")');
		}
		if (desk == 6) {
			$(".showcase2").css("background-image",'url("images/desk/7.jpg")');
		}
		if (desk == 7) {
			$(".showcase2").css("background-image",'url("images/desk/8.jpg")');
		}
		if (desk == 8) {
			$(".showcase2").css("background-image",'url("images/desk/9.jpg")');
		}
		if (desk == 9) {
			$(".showcase2").css("background-image",'url("images/desk/10.jpg")');
		}
		if (desk == 10) {
			$(".showcase2").css("background-image",'url("images/desk/0.jpg")');
		}

		desk = desk + 1;
	});

});