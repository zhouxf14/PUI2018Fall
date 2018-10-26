$(document).ready(function() {
	$(".add-one").click(function() {
		var cart_num = parseInt($("#cart-quantity").text());
		var cart_update = cart_num + 1;
		$("#cart-quantity").text(cart_update);
		localStorage.setItem("cart_num", JSON.parse(cart_update));
	});
})