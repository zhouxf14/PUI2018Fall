$(document).on("click", "#signin-btn", function() {
	window.location.href="signin.html";
});

$(document).on("click", ".textbox", function() {
	$('.textbox').val("");
});


$(document).ready(function() {
	if (parseInt(JSON.parse(localStorage.getItem("cart_num"))) > 0) {
		var cart = JSON.parse(localStorage.getItem("cart_num"));
		var cart_num = parseInt(cart);
		$("#cart-quantity").text(cart_num);
	} else {
		$("#cart-quantity").text("0");
		var cart_num = 0;
	}
	// var cart_num = parseInt($("#cart-quantity").text());
	$(".wishlist").click(function() {
		location.href = "wishlist.html";
	});
})