$(document).ready(function() {
	var single = parseFloat($("#price").text());
	var image_path = $("#roll-image")[0].src; 
	var image_folder = image_path.substring(0, image_path.lastIndexOf("/"));
	var quantity = parseInt($("#quantity").children(".active").text());
	$(".option").click(function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
		} else {
			if($(this).parent().children(".option").hasClass("active")) {
				$(this).parent().children(".active").removeClass("active");
				$(this).addClass("active");
			} else {
				$(this).addClass("active");
			}
		}

	});
	$("#quantity").children(".option").click(function() {
		quantity = parseInt($(this).text());
		var total = single * quantity;
		$("#price").text(total)
	});
	$("#glazing").children(".option").click(function() {
		var glazing = $(this).text();
		var new_image_path = image_folder + "/" + glazing + ".png";
		$("#roll-image").attr("src",new_image_path);
	})
	$("#addtocart").click(function() {
		var cart_num = parseInt($("#cart-quantity").text());
		var cart_update = cart_num + quantity;
		$("#cart-quantity").text(cart_update);
		localStorage.setItem("cart_num", JSON.stringify(cart_update));
	});
})

