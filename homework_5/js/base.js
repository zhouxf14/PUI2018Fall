$(document).on("click", "#signin-btn", function() {
	window.location.href="signin.html";
});

$(document).on("click", ".textbox", function() {
	$('.textbox').val("");
});


// $(document).on("click", "#add-item", function() {
//     var list = $("#grocery-list");
//     var itemInput = $("#new-list-item");
//     list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
// });