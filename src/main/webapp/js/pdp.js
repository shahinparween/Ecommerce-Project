var cartItems = []; // Array to store cart items

function addItem() {

	var sessioncart = JSON.parse(sessionStorage.getItem('cartItems'));
	if (sessioncart != null) {
		cartItems = sessioncart;
	}
	var qty = 1;
	var title = document.getElementById('product-name').innerHTML;
	var price = document.getElementById('product-price').innerHTML;
	var description = document.getElementById('product-description').innerHTML;
	var productId = document.getElementById('productId').innerHTML;
	var image = document.getElementById('productImage').value;

	var containsObject = cartItems.some(function(product) {
		return product.productId === productId;
	});
	
	if(containsObject){
		qty = qty + 1;
	}
	
	var item = {
		title: title,
		msrpPrice: price,
		description: description,
		productId: productId,
		image: image,
		qty: qty
	};

	cartItems.push(item);
	sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
	alert("Your Item "+item.title+" Added To cart Successfully");
}
function goToCart() {
	window.location.href = 'cart.html';
}
function gotoCategory(categoryCode) {

	const apiUrl = "http://localhost:8080/Ecommerce-Project/productDetails?categoryCode=" + categoryCode;
	makeAPICall(apiUrl, function(error, response) {
		if (error) {
			console.log('Error:', error.message);
		} else {
			sessionStorage.setItem('productList', JSON.stringify(response));
			window.location.href = 'plp.html';
		}
	});
}
function makeAPICall(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);

	xhr.onreadystatechange = function() {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.response);
			callback(null, response); // Call the callback with the response data
		} else {
			callback(new Error('API request failed with status ' + xhr.status), null); // Call the callback with an error
		}
	};

	xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {

	//Welcome User
	const userData = JSON.parse(sessionStorage.getItem('userData'));
	var h4 = document.getElementById('welcomeMsg');
	h4.innerText = 'For any support reach out to us \n On our toll free number : 1800-2999-222 \n\n\n\n\n\n Welcome ' + userData.name;

	//ProductDetails
	const product = JSON.parse(sessionStorage.getItem('productData'));
	var productImage = document.getElementById('product-image');
	productImage.setAttribute('src', 'images/' + product.image);
	productImage.setAttribute('alt', product.productId);

	document.getElementById('product-name').innerHTML = product.title;
	document.getElementById('product-price').innerHTML = '$'+product.msrpPrice;
	document.getElementById('product-description').innerHTML = '<b>descriptions :</b> <br>' + product.description;
	document.getElementById('productId').innerHTML = product.productId;
	document.getElementById('productImage').value = product.image;

});