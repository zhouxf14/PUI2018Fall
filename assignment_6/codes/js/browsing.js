// this is for the interaction in thr products browsing page

$(document).ready(function() {
// object for items
	function Item(flavor, glazing, quantity, single, total, image_path) {
		this.flavor = flavor,
		this.glazing = glazing,
		this.quantity = quantity,
		this.single = single,
		this.total = total,
		this.image_path = image_path
	}
// event after clicking the add to shoppping cart button
	$(".add-one").click(function() {
		var item_flavor = $(this).parents(".card").find(".flavor").text();
		var item_galzing = $(this).parents(".card").find("img").attr("alt");
		var item_quantity = 1;
		var item_price = parseFloat($(this).parents(".card").find(".price").text());
		var cart_num = parseInt($("#cart-quantity").text());
		var cart_update = cart_num + 1;
		var image_path = $(this).parents(".card").find("img").attr("src");
		var item_list = JSON.parse(localStorage.getItem("item_list"));
		if (item_list == null) {
			item_list = new Array();
		}

		var item = new Item(item_flavor, item_galzing, item_quantity, item_price, item_price, image_path);

		$("#cart-quantity").text(cart_update);
		localStorage.setItem("cart_num", JSON.stringify(cart_update));

		item_list.push(item);
		localStorage.setItem("item_list", JSON.stringify(item_list));
	});

//event after clicking the add to wishlist button
	$(".wish-one").click(function() {
		// if($(this).parent().hasClass(".wished")) {
		// 	alert("It is already in your Wishlist.");
		// } else {
		// 	$(this).parent().addClass(".wished");
		// }
		var wish_flavor = $(this).parents(".card").find(".flavor").text();
		var wish_galzing = $(this).parents(".card").find("img").attr("alt");
		var wish_quantity = 1;
		var wish_price = parseFloat($(this).parents(".card").find(".price").text());
		var wish_path = $(this).parents(".card").find("img").attr("src");
		var wish_list = JSON.parse(localStorage.getItem("wish_list"));
		if (wish_list == null) {
			wish_list = new Array();
		}
		var new_wish = new Item(wish_flavor, wish_galzing, wish_quantity, wish_price, wish_price, wish_path);
		wish_list.push(new_wish);
		localStorage.setItem("wish_list", JSON.stringify(wish_list));
		alert("Wish will come true!");
	});
})