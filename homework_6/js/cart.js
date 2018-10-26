$(document).ready(function() {
	var item_list = JSON.parse(localStorage.getItem("item_list"));
	if (item_list == null ) {
		$('<div class="cart-item">Your Shopping Cart is empty.</div>').appendTo($("#cart-main"));
	} else {
		for (var index in item_list) {
			item = item_list[index];
			$('<div class="cart-item row" id="' + index + '"><div class="inline"><div class="cart-flavor">' + item["flavor"] + '</div><div>Glazing: <span class="cart-glazing">' + item["glazing"] + '</span></div><div class="cart-quantity">Quatity: <span>' + item["quantity"] + '</span></div><div class="cart-total">Price: $<span>' + item["total"] + '</span></div></div><img src="' + item["image_path"] + '"" class="cart-image inline"><div class="btns"><span class="delete-btn btn">DELETE</span><span class="move-to-fav btn">MOVE TO FAVORITE</span></div>').appendTo($("#cart-main"));
		}
	}


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
		var i = parseInt($(this).parents(".cart-item").id());
		var item = item_list[i];
		var quantity = item["quantity"];
		var cart_num = parseInt($("#cart-quantity").text());
		cart_num = cart_num - quantity;
		$("#cart-quantity").text(cart_num);
		localStorage.removeItem("cart_num");
		localStorage.setItem("cart_num", cart_num);
		item_list.splice(index, 1);
		localStorage.removeItem("item_list");
		localStorage.setItem("item_list", item_list);
		$(this).parents(".cart-item").remove();
		console.log(item_list);
		console.log(cart_num);
	});
})