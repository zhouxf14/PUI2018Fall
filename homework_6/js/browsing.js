$(document).ready(function() {
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

		function Item(flavor, glazing, quantity, single, total, image_path) {
			this.flavor = flavor,
			this.glazing = glazing,
			this.quantity = quantity,
			this.single = single,
			this.total = total,
			this.image_path = image_path
		}

		var item = new Item(item_flavor, item_galzing, item_quantity, item_price, item_price, image_path);

		$("#cart-quantity").text(cart_update);
		localStorage.setItem("cart_num", JSON.stringify(cart_update));

		item_list.push(item);
		localStorage.setItem("item_list", JSON.stringify(item_list));
	});
})