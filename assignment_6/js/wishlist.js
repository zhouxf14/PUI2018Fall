$(document).ready(function() {
	var wish_list = JSON.parse(localStorage.getItem("wish_list"));
	if (wish_list.length <= 0 ) {
		$('<div class="wish-item">Your Wishlist is empty. Make a wish!</div>').appendTo($("#wish-main"));
	} else {
		for (var index in wish_list) {
			wish = wish_list[index];
			$('<div class="wish-item row" id="' + index + '"><div class="inline"><div class="wish-flavor">' + wish["flavor"] + '</div><div>Glazing: <span class="wish-glazing">' + wish["glazing"] + '</span></div><div class="wish-quantity">Quatity: <span>' + wish["quantity"] + '</span></div><div class="wish-total">Price: $<span>' + wish["total"] + '</span></div></div><img src="' + wish["image_path"] + '"" class="wish-image inline"><div class="btns"><span class="delete-btn btn">DELETE</span><span class="add-to-cart btn">ADD TO CART</span></div>').appendTo($("#wish-main"));
		}
	}


	$(".delete-btn").click(function() {
		var i = parseInt($(this).parents(".wish-item").attr("id"));
		var wish = wish_list[i];
		wish_list.splice(i, 1);
		// localStorage.removeItem("item_list");
		localStorage.setItem("wish_list", JSON.stringify(wish_list));
		$(this).parents(".wish-item").remove();
		window.location.reload();
	});
})