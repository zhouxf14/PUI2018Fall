$(document).ready(function() {
	$(window).resize(function(){
		location.reload()
	});
	
	var guideline_height = $(window).height() - $("nav").height();
  	$("#guideline").height(guideline_height);

	var window_height = $(window).height();
  	$("#cubes").height(window_height);
  	$("#cylinder").height(window_height);

	$('.cube ul').css("transform", "rotateX(-30deg) rotateY(-60deg) rotateZ(0deg)");
	var x = 0;
	var y = 0;
	var z = 0;

	// $('#play').click(function() {
	// 	$('.cube ul').css("animation“, "willRote 7s ease-in-out infinite alternate");
	// });

	$("#play").click(function() {
		$(".cube_still").toggleClass("invisable");
		$(".cube_rotate").toggleClass("invisable");
		$("#play").toggleClass("invisable");
		$("#pause").toggleClass("invisable");
	});

	$("#pause").click(function() {
		$(".cube_still").toggleClass("invisable");
		$(".cube_rotate").toggleClass("invisable");
		$("#play").toggleClass("invisable");
		$("#pause").toggleClass("invisable");
	});

	$('#top').click(function() {
		z = z - 1;
		var rotate_z = 30 * z;
		var rotate_x = 30 * x - 30;
		var rotate_y = 30 * y - 60;
		var rotate = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) rotateZ(" + rotate_z + "deg)";
		$('.cube_still').css("transform", rotate);
	});

	$('#down').click(function() {
		z = z + 1;
		var rotate_z = 30 * z;
		var rotate_x = 30 * x - 30;
		var rotate_y = 30 * y - 60;
		var rotate = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) rotateZ(" + rotate_z + "deg)";
		$('.cube_still').css("transform", rotate);
	});

	$('#left').click(function() {
		y = y - 1;
		var rotate_z = 30 * z;
		var rotate_x = 30 * x - 30;
		var rotate_y = 30 * y - 60;
		var rotate = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) rotateZ(" + rotate_z + "deg)";
		$('.cube_still').css("transform", rotate);
	});

	$('#right').click(function() {
		y = y + 1;
		var rotate_z = 30 * z;
		var rotate_x = 30 * x - 30;
		var rotate_y = 30 * y - 60;
		var rotate = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) rotateZ(" + rotate_z + "deg)";
		$('.cube_still').css("transform", rotate);
	});

	$('#front').click(function() {
		x = x - 1;
		var rotate_z = 30 * z;
		var rotate_x = 30 * x - 30;
		var rotate_y = 30 * y - 60;
		var rotate = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) rotateZ(" + rotate_z + "deg)";
		$('.cube_still').css("transform", rotate);
	});

	$('#back').click(function() {
		x = x + 1;
		var rotate_z = 30 * z;
		var rotate_x = 30 * x - 30;
		var rotate_y = 30 * y - 60;
		var rotate = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) rotateZ(" + rotate_z + "deg)";
		$('.cube_still').css("transform", rotate);
	});

});


