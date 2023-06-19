const productListArray = [];

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
	xhr.open('GET', url, true);

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
function filterPrice(start, end) {

	const productList = JSON.parse(sessionStorage.getItem('productList'));

	for (var i = 0; i < productList.length; i++) {
		if (!productList[i].msrpPrice > start && productList[i].msrpPrice < end) {
			productList.splice(i, 1);
		}
	}
	sessionStorage.setItem('productList', JSON.stringify(productList));
}

document.addEventListener('DOMContentLoaded', function() {

	//Welcome User
	const userData = JSON.parse(sessionStorage.getItem('userData'));
	var h4 = document.getElementById('welcomeMsg');

	h4.innerText = 'For any support reach out to us \n On our toll free number : 1800-2999-222 \n\n\n\n\n\n Welcome ' + userData.name;

	var filterElement = document.getElementById('filter-grid');


	//ProductListing
	const productList = JSON.parse(sessionStorage.getItem('productList'));
	var element = document.getElementById('product-list');

	for (var i = 0; i < productList.length; i++) {

		const product = productList[i];
		var div = document.createElement('div');
		div.classList.add('product');

		var img = document.createElement('img');
		var h2 = document.createElement('h2');
		var h3 = document.createElement('h3');
		var span = document.createElement('span');
		var viewProductButton = document.createElement('button');

		img.setAttribute('src', 'images/' + product.image);
		img.setAttribute('alt', product.productId);

		h2.innerHTML = product.title;
		h3.innerHTML = '$' + product.msrpPrice;
		h3.style.color = 'green';
		span.innerHTML = product.productId;
		viewProductButton.textContent = 'View Details';
		viewProductButton.classList.add('primary-button');

		viewProductButton.addEventListener('click', function() {
			sessionStorage.setItem('productData', JSON.stringify(product));
			window.location.href = 'pdp.html';
		});

		div.appendChild(img);
		div.appendChild(h2);
		div.appendChild(span);
		div.appendChild(h3);
		div.appendChild(viewProductButton);

		element.appendChild(div);
	}

});