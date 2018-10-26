// this part is for the interaction in the detail page.
$(document).ready(function() {
	var single = parseFloat($("#price").text());
	var image_path = $("#roll-image")[0].src; 
	var image_folder = image_path.substring(0, image_path.lastIndexOf("/"));
	var quantity = parseInt($("#quantity").children(".active").text());
	var total = single * quantity;

	function Item(flavor, glazing, quantity, single, total, image_path) {
		this.flavor = flavor,
		this.glazing = glazing,
		this.quantity = quantity,
		this.single = single,
		this.total = total,
		this.image_path = image_path
	}

	var item_list = JSON.parse(localStorage.getItem("item_list"));
	if (item_list == null) {
		item_list = new Array();
	}

	var wish_list = JSON.parse(localStorage.getItem("wish_list"));
	if (wish_list == null) {
		wish_list = new Array();
	}

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
		total = single * quantity;
		$("#price").text(total)
	});
	var glazing = $("#glazing").children(".active").text();
	$("#glazing").children(".option").click(function() {
		glazing = $(this).text();
		image_path = image_folder + "/" + glazing + ".png";
		$("#roll-image").attr("src", image_path);
	})
	$("#addtocart").click(function() {
		var cart_num = parseInt($("#cart-quantity").text());
		var cart_update = cart_num + quantity;
		$("#cart-quantity").text(cart_update);
		localStorage.setItem("cart_num", JSON.stringify(cart_update));
		var flavor = $("#flavor").text();
		var item = new Item(flavor, glazing, quantity, single, total, image_path);
		item_list.push(item);
		localStorage.setItem("item_list", JSON.stringify(item_list));
		alert("This item has been added into shopping cart successfully!")
		// console.log(JSON.parse(localStorage.getItem("item_list")));
	});

	$("#addtowish").click(function() {
		var flavor = $("#flavor").text();
		var item = new Item(flavor, glazing, quantity, single, total, image_path);
		wish_list.push(item);
		localStorage.setItem("wish_list", JSON.stringify(wish_list));
		alert("This item has been added into your wishlist successfully!")
	});

	// the following works for a carousel for the bonus point.
	var max = 8;
	$(".fa-chevron-right").click(function() {
		var original_last_path = $("#4")[0].src;
		var original_folder = original_last_path.substring(0, original_last_path.lastIndexOf("/"));
		var last_image = original_last_path.substring(original_last_path.lastIndexOf("/")+1, original_last_path.length);
		var last_index = parseInt(last_image.substring(0, last_image.lastIndexOf(".")));
		$("#1").attr("src", $("#2")[0].src);
		$("#2").attr("src", $("#3")[0].src);
		$("#3").attr("src", $("#4")[0].src);
		if (last_index < max) {
			var new_index = last_index + 1;
			var path = original_folder + "/" + new_index + ".jpg";
			$("#4").attr("src", path);
		} else {
			var path = original_folder + "/" + "1.jpg";
			$("#4").attr("src", path);
		}
		// $("#4").attr("src", $("#2")[0].src);
	});

	$(".fa-chevron-left").click(function() {
		var original_first_path = $("#1")[0].src;
		var original_folder = original_first_path.substring(0, original_first_path.lastIndexOf("/"));
		var first_image = original_first_path.substring(original_first_path.lastIndexOf("/")+1, original_first_path.length);
		var first_index = parseInt(first_image.substring(0, first_image.lastIndexOf(".")));
		$("#4").attr("src", $("#3")[0].src);
		$("#3").attr("src", $("#2")[0].src);
		$("#2").attr("src", $("#1")[0].src);
		if (first_index > 1) {
			var new_first_index = first_index - 1;
			var path = original_folder + "/" + new_first_index + ".jpg";
			$("#1").attr("src", path);
		} else {
			var path = original_folder + "/" + "8.jpg";
			$("#1").attr("src", path);
		}
		// $("#4").attr("src", $("#2")[0].src);
	});

})

