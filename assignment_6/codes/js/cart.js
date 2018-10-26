// this part is for the interaction in the shopping cart page
$(document).ready(function() {
	// to store all the items in the shopping cart
	var item_list = JSON.parse(localStorage.getItem("item_list"));

	if (item_list.length <= 0 ) {
		$('<div class="cart-item">Your Shopping Cart is empty.</div>').appendTo($("#cart-main"));
	} else {
		for (var index in item_list) {
			item = item_list[index];
			$('<div class="cart-item row" id="' + index + '"><div class="inline"><div class="cart-flavor">' + item["flavor"] + '</div><div>Glazing: <span class="cart-glazing">' + item["glazing"] + '</span></div><div class="cart-quantity">Quatity: <span>' + item["quantity"] + '</span></div><div class="cart-total">Price: $<span>' + item["total"] + '</span></div></div><img src="' + item["image_path"] + '"" class="cart-image inline"><div class="btns"><span class="delete-btn btn">DELETE</span><span class="move-to-fav btn">MOVE TO WISHLIST</span></div>').appendTo($("#cart-main"));
		}
	}

	function Item(flavor, glazing, quantity, single, total, image_path) {
		this.flavor = flavor,
		this.glazing = glazing,
		this.quantity = quantity,
		this.single = single,
		this.total = total,
		this.image_path = image_path
	}

	// this is for the event after clicking the "delete" button in the shopping cart page

	$(".delete-btn").click(function() {
		// var flavor = $(this).parents(".cart-item").find(".cart-flavor").text();
		// var glazing = $(this).parents(".cart-item").find(".cart-glazing").text();
		// var quantity = parseInt($(this).parents(".cart-item").find(".cart-quantity span").text());
		// var total = parseFloat($(this).parents(".cart-item").find(".cart-total span").text());
		// var image_path = $(this).parents(".cart-item").find(".cart-image").attr("src");
		// var single_price = total / quantity;
		// var deleted_item = {flavor: flavor, glazing: glazing, quantity: quantity, price: single_price, total: total, image_path: image_path};
		// item_list.splice($.inArray(deleted_item, item_list),1);
		// console.log(item_list);
		// console.log(deleted_item);
		var i = parseInt($(this).parents(".cart-item").attr("id"));
		// console.log(i);
		var item = item_list[i];
		var quantity = item["quantity"];
		var cart_num = parseInt($("#cart-quantity").text());
		cart_num = cart_num - quantity;
		$("#cart-quantity").text(cart_num);
		// localStorage.removeItem("cart_num");
		localStorage.setItem("cart_num", JSON.stringify(cart_num));
		item_list.splice(i, 1);
		// localStorage.removeItem("item_list");
		localStorage.setItem("item_list", JSON.stringify(item_list));
		$(this).parents(".cart-item").remove();
		window.location.reload();
	});

	// this part is to move the selected item to the wishlist and delete it from the shopping cart list
	$(".move-to-fav").click(function() {
		var wish_flavor = $(this).parents(".cart-item").find(".cart-flavor").text();
		var wish_galzing = $(this).parents(".cart-item").find(".cart-glazing").text();
		var wish_quantity = parseInt($(this).parents(".cart-item").find(".cart-quantity span").text());
		var wish_price = parseFloat($(this).parents(".cart-item").find(".cart-total span").text());
		var wish_single = wish_price / wish_quantity;
		var wish_path = $(this).parents(".cart-item").find("img").attr("src");
		var wish_list = JSON.parse(localStorage.getItem("wish_list"));
		if (wish_list == null) {
			wish_list = new Array();
		}
		var new_wish = new Item(wish_flavor, wish_galzing, wish_quantity, wish_single, wish_price, wish_path);
		wish_list.push(new_wish);
		localStorage.setItem("wish_list", JSON.stringify(wish_list));

		var i = parseInt($(this).parents(".cart-item").attr("id"));
		// console.log(i);
		var item = item_list[i];
		var quantity = item["quantity"];
		var cart_num = parseInt($("#cart-quantity").text());
		cart_num = cart_num - quantity;
		$("#cart-quantity").text(cart_num);
		// localStorage.removeItem("cart_num");
		localStorage.setItem("cart_num", JSON.stringify(cart_num));
		item_list.splice(i, 1);
		// localStorage.removeItem("item_list");
		localStorage.setItem("item_list", JSON.stringify(item_list));
		$(this).parents(".cart-item").remove();

		alert("Moved to Wishlist!");
		window.location.reload();
	});
})