$(document).ready(function() {
	var item_list = JSON.parse(localStorage.getItem("item_list"));
	if (item_list == null ) {
		$('<div class="cart-item">Your Shopping Cart is empty.</div>').appendTo($("#cart-main"));
	} else {
		for (var index in item_list) {
			item = item_list[index];
			$('<div class="cart-item row"><div class="inline"><div class="cart-flavor">' + item["flavor"] + '</div><div class="cart-glazing">Glazing: ' + item["glazing"] + '</div><div class="cart-quantity">Quatity: ' + item["quantity"] + '</div><div class="cart-total">Price: $' + item["total"] + '</div></div><img src="' + item["image_path"] + '"" class="cart-image inline"><div class="btns"><span class="delete-btn btn">DELETE</span><span class="move-to-fav btn">MOVE TO FAVORITE</span></div>').appendTo($("#cart-main"));
		}
	}
})