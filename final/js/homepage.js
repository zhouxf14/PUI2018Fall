subtotal = document.documentElement.clientHeight - 50;
document.getElementById("carousel").style.height = subtotal + "px";

$(document).ready(function(){
	$(window).resize(function(){
	    location.reload()
	});

	$('.carousel').carousel({
		indicators: true,
		noWrap: true,
		numVisible : 3
	});

	// when the active carouel item is clicked
	// $('#carousel .active').click(function() {
	// 	var id = $("#carousel .active").attr("id");
	// 	location.href = id + ".html";
	// });

	$("#one").click(function() {
		window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "one_mobile.html" :  "one.html"
	});

	$("#one").hover(function(){
		if ($('#one').hasClass('active')) {
			$("#one img").attr("src","images/step1_hover.png");
		}
	},function(){
	    if ($('#one').hasClass('active')) {
	    	$("#one img").attr("src","images/step1.png");
	    }
	});

	$("#two").hover(function(){
		if ($('#two').hasClass('active')) {
			$("#two img").attr("src","images/step2_hover.png");
		}
	},function(){
	    if ($('#two').hasClass('active')) {
	    	$("#two img").attr("src","images/step2.png");
	    }
	});

	$("#three").hover(function(){
		if ($('#three').hasClass('active')) {
			$("#three img").attr("src","images/step3_hover.png");
		}
	},function(){
	    if ($('#three').hasClass('active')) {
	    	$("#three img").attr("src","images/step3.png");
	    }
	});


	$('#1').click(function() {
		$('.pagination .active').addClass('waves-effect');
		$('.pagination .active').removeClass('active');
		$('#1').toggleClass('active');
		$('#1').toggleClass('waves-effect');
		$('.carousel').carousel('set');
	});
	$('#2').click(function() {
		$('.pagination .active').addClass('waves-effect');
		$('.pagination .active').removeClass('active');
		$('#2').toggleClass('active');
		$('#2').toggleClass('waves-effect');
		$('.carousel').carousel('set');
	});
	$('.pagination .chevron_right').click(function() {
		$('.carousel').carousel('next');
		if($('#1').hasClass('active')) {
			$('#1').removeClass('active');
			$('#1').addClass('waves-effect');
			$('#2').addClass('active');
			$('#2').removeClass('waves-effect');
			// $('.chevron_left').removeClass('disabled');
			// $('.chevron_left').addClass('waves-effect');
		} else if($('#2').hasClass('active')) {
			$('#2').removeClass('active');
			$('#2').addClass('waves-effect');
			$('#3').addClass('active');
			$('#3').removeClass('waves-effect');
			// $('.chevron_right').addClass('disabled');
			// $('.chevron_right').removeClass('waves-effect');
		} else if($('#3').hasClass('active')) {
			$('#3').removeClass('active');
			$('#3').addClass('waves-effect');
			$('#1').addClass('active');
			$('#1').removeClass('waves-effect');
		}
	});

	$('.pagination .chevron_left').click(function() {
		$('.carousel').carousel('prev');
		if($('#3').hasClass('active')) {
			$('#3').removeClass('active');
			$('#3').addClass('waves-effect');
			$('#2').addClass('active');
			$('#2').removeClass('waves-effect');
			// $('.chevron_right').removeClass('disabled');
			// $('.chevron_right').addClass('waves-effect');
		} else if($('#2').hasClass('active')) {
			$('#2').removeClass('active');
			$('#2').addClass('waves-effect');
			$('#1').addClass('active');
			$('#1').removeClass('waves-effect');
			// $('.chevron_left').addClass('disabled');
			// $('.chevron_left').removeClass('waves-effect');
		} else if($('#1').hasClass('active')) {
			$('#1').removeClass('active');
			$('#1').addClass('waves-effect');
			$('#3').addClass('active');
			$('#3').removeClass('waves-effect');
		}
	});
});
      