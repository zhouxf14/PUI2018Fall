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

})

